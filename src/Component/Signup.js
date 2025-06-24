import React, { useState } from 'react';
import { Form, Input, Button, Typography, Space } from 'antd';
import { UserOutlined, MailOutlined, EyeOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

const Signup = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log('Signup values:', values);
    // Implement your signup logic here
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="books-section">
          <div className="books-stack" />
        </div>

        <div className="signup-form-section">
          <div className="signup-header">
            <Title level={2} className="welcome-title">
              Join Book Bridge!
            </Title>
            <Text className="welcome-description">
              Create your account and start enjoying the benefits of selling and exchanging books easily and efficiently.
            </Text>
          </div>

          <Title level={3} className="signup-subtitle">Create Your Account</Title>

          <Form
            form={form}
            name="signup_form"
            className="signup-form"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your full name!' }]}
            >
              <Input
                prefix={<UserOutlined className="input-icon" />}
                placeholder="Full Name"
                className="signup-input"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please enter your email!' }]}
            >
              <Input
                prefix={<MailOutlined className="input-icon" />}
                placeholder="Enter Email"
                className="signup-input"
                suffix={<span className="email-suffix">@</span>}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password
                prefix={<EyeOutlined className="input-icon" />}
                placeholder="Enter Password"
                className="signup-input"
                iconRender={visible => <EyeOutlined className="eye-icon" />}
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Passwords do not match!');
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<EyeOutlined className="input-icon" />}
                placeholder="Confirm Password"
                className="signup-input"
                iconRender={visible => <EyeOutlined className="eye-icon" />}
              />
            </Form.Item>

            <div className="account-prompt">
              <Text>Already have an account?</Text>
              <Link href="#" className="create-account-link">
                Login
              </Link>
            </div>

            <div className="signup-buttons">
              <Button
                type="default"
                icon={<GoogleOutlined />}
                className="google-button"
              />
              <Button
                type="default"
                icon={<FacebookOutlined />}
                className="facebook-button"
              />
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="signup-button"
              >
                SIGN UP
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <style jsx>{`
        .signup-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #fff;
          padding: 20px;
        }

        .signup-content {
          display: flex;
          width: 100%;
          max-width: 1000px;
          background-color: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .books-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
        }

        .books-stack {
          width: 100%;
          height: 400px;
          background-image: url('https://t3.ftcdn.net/jpg/03/41/64/12/360_F_341641286_3PsasOhbu2STmLNAfTwXx5dsmxRgZ3qT.jpg');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        .signup-form-section {
          flex: 1;
          padding: 40px;
          display: flex;
          flex-direction: column;
        }

        .signup-header {
          margin-bottom: 30px;
          text-align: center;
        }

        .welcome-title {
          color: #D4A017 !important;
          margin-bottom: 16px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .welcome-description {
          color: #666;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
          text-align: center;
        }

        .signup-subtitle {
          color: #D4A017 !important;
          margin-bottom: 24px !important;
          text-align: center;
        }

        .signup-form {
          width: 100%;
        }

        .signup-input {
          height: 50px;
          background-color: #FFE4B5 !important;
          border: none !important;
          border-radius: 8px !important;
          font-size: 16px;
        }

        .input-icon {
          color: #999;
          margin-right: 8px;
        }

        .email-suffix {
          color: #999;
          font-size: 18px;
        }

        .eye-icon {
          color: #999;
        }

        .account-prompt {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 24px;
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
        }

        .create-account-link {
          color: #D4A017 !important;
          font-weight: bold;
        }

        .signup-buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .google-button, .facebook-button {
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          border: 1px solid #eee;
          padding: 0;
          font-size: 20px;
        }

        .signup-button {
          min-width: 120px;
          height: 48px;
          background-color: #D4A017 !important;
          border-color: #D4A017 !important;
          border-radius: 24px;
          font-weight: bold;
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .signup-content {
            flex-direction: column;
          }

          .books-section {
            padding: 20px;
          }

          .books-stack {
            height: 200px;
          }

          .signup-form-section {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Signup;
