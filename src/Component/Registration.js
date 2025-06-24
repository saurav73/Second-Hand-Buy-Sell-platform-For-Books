import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Tabs,
  Typography,
  Upload,
  message,
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;
const { TabPane } = Tabs;
const { Dragger } = Upload;

const Registration = () => {
  const [form] = Form.useForm();
  const [accountType, setAccountType] = useState('individual');

  const onFinish = (values) => {
    console.log('Submitted Values:', values);
    message.success('Registration successful!');
  };

  const onTabChange = (key) => {
    setAccountType(key);
    form.resetFields();
  };

  const draggerProps = {
    beforeUpload: () => false,
    multiple: false,
    accept: '.png,.jpg,.jpeg,.pdf',
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
      <Title level={3} style={{ textAlign: 'center', color: '#1ABC9C' }}>
        Welcome to Book Bridge!
      </Title>
      <Text style={{ display: 'block', textAlign: 'center', marginBottom: 10 }}>
        Choose your account type and fill in the details below.
      </Text>

      <Tabs defaultActiveKey="individual" onChange={onTabChange} centered>
        <TabPane tab="Individual" key="individual" />
        <TabPane tab="Organization" key="organization" />
      </Tabs>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 10 }}
      >
        {accountType === 'individual' ? (
          <>
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: 'Please enter your full name' }]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>
          </>
        ) : (
          <>
            <Form.Item
              label="Organization Name"
              name="organizationName"
              rules={[{ required: true, message: 'Please enter organization name' }]}
            >
              <Input placeholder="Enter organization name" />
            </Form.Item>

            <Form.Item
              label="Contact Person"
              name="contactPerson"
              rules={[{ required: true, message: 'Please enter contact person' }]}
            >
              <Input placeholder="Enter contact person name" />
            </Form.Item>
          </>
        )}

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Enter a valid email address' },
          ]}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please enter your password' },
            { min: 8, message: 'Password must be at least 8 characters long' },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        {accountType === 'organization' && (
          <Form.Item
            label="Business Registration Number"
            name="businessRegNo"
            rules={[{ required: true, message: 'Please enter business registration number' }]}
          >
            <Input placeholder="Enter business registration number" />
          </Form.Item>
        )}

        <Form.Item
          label={accountType === 'organization' ? 'Upload a recent photo of yourself' : 'ID Card'}
          name="upload"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          rules={[{ required: true, message: 'Please upload a file' }]}
        >
          <Dragger {...draggerProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to upload
            </p>
            <p className="ant-upload-hint">
              Accepts PNG, JPG, or PDF files
            </p>
          </Dragger>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{ backgroundColor: '#1ABC9C', borderColor: '#1ABC9C' }}
          >
            Register
          </Button>
        </Form.Item>
      </Form>

      <div style={{ textAlign: 'center' }}>
        <Text>Have an account? </Text>
        <Link href="#" style={{ color: '#1ABC9C' }}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Registration;
