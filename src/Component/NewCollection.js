import React from 'react';
import Slider from 'react-slick';
import './NewCollection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewCollection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const books = [
    {
      img: 'https://www.bookishelf.com/wp-content/uploads/2020/01/Book-Review-The-God-Of-Small-Things-by-Arundhati-Roy-scaled.jpg',
      title: 'The God of Small Things',
      author: 'Arundhati Roy',
      price: 'Rs. 700/='
    },
    {
      img: 'https://tse3.mm.bing.net/th?id=OIP.3FtPmJH2loEkUcJgWZy2cQHaLW&pid=Api&P=0&h=220',
      title: 'The Inheritance of Loss',
      author: 'Kiran Desai',
      price: 'Rs. 700/='
    },
    {
        img: 'https://m.media-amazon.com/images/I/81sC0oic8wL._SL1500_.jpg',
        title: 'A Fine Balance',
        author: 'Rohinton Mistry',
        price: 'Rs. 850/='
      },
      {
        img: 'https://m.media-amazon.com/images/M/MV5BMDVkMDRkMzItN2EyYS00ZTI5LTljYzgtNzRmZDQ0OTQ3M2VjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
        title: 'The White Tiger',
        author: 'Aravind Adiga',
        price: 'Rs. 650/='
      },
      {
        img: 'https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/Midnights-Children.jpg',
        title: 'Midnight\'s Children',
        author: 'Salman Rushdie',
        price: 'Rs. 900/='
      },
      {
        img: 'https://i1.wp.com/bookstoker.com/wp-content/uploads/2020/11/Shuggie-Bain-by-Douglas-Stuart.jpg?w=1664&ssl=1',
        title: 'Shuggie Bain',
        author: 'Douglas Stuart',
        price: 'Rs. 750/='
      }
  ];

  return (
    <div className="new-collection-container">
      <h2 className="new-collection-title">New Collection</h2>
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index} className="book-card-slider">
            <div className="book-card-slider-inner">
              <img src={book.img} alt={book.title} className="book-card-slider-img" />
              <h3 className="book-card-slider-title">{book.title}</h3>
              <p className="book-card-slider-author">{book.author}</p>
              <p className="book-card-slider-price">{book.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewCollection; 