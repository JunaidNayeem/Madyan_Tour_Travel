import React from 'react';
import Slider from 'react-slick';
import './OurServices.css';
import { useNavigate } from 'react-router-dom';


const OurServices = () => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const ourservice = [
    {
      title: 'Hajj Service',
      text: 'Click Here for Hajj Service',
      link: '/hajj-form',
      image: 'https://madyantours.com/assets/image1-431d9ec1.png',
    },
    {
      title: 'Umrah Service',
      text: 'Click Here for Umrah Services',
      link: '/umrah-form',
      image: 'https://madyantours.com/assets/image2-5125f730.png',
    },
    {
      title: 'Visa Services',
      text: 'Click Here for Visa Services',
      link: '/visa-form',
      image: 'https://madyantours.com/assets/image3-8d4925ba.png',
    },
    {
      title: 'Flight Booking',
      text: 'Click Here for Flight Booking',
      link: '/flight-form',
      image: 'https://madyantours.com/assets/image4-d9dd59ab.png',
    },
    {
      title:'Hotel Booking',
      text:'Click here for hotel booking ',
      link: '/hotel-form',
      image: 'https://madyantours.com/assets/image6-66be96ea.png',
    },
    {
      title:'Transportation Services',
      text:'Click Here for Transportation Services',
      link: '/transport-form',
      image: 'https://madyantours.com/assets/image6-66be96ea.png',
    },
  ];

  return (
    <Slider {...settings}>
      {ourservice.map((service, index) => (
        <div className="ourservice-card" key={index}>
          <img src={service.image} alt={service.text} className="ourservice-image" />
          <div className="overlay">
            <a href={service.link} className="overlay-text">
              {service.text}
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default OurServices;
