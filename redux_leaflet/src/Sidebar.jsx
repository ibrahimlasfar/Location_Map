import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaMapMarkerAlt, FaInfoCircle, FaBed, FaCalendarAlt, FaMoneyBillAlt, FaTimes, FaPhone } from 'react-icons/fa';

const Sidebar = ({ marker, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose(); // Call onClose prop to notify the parent component
  };

 

  return isOpen ? (
    <div style={{ width: 350, height: '100vh', position: 'absolute', bottom: 20, left: 0, backgroundColor: '#EAF1F7', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', zIndex: 9999 }}>
      {/* Close button */}
      <button onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#fff', border: 'none', borderRadius: '50%', width: '30px', height: '30px', lineHeight: '30px', textAlign: 'center', cursor: 'pointer', zIndex: 1000, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}><FaTimes /></button>
      {/* Marker information */}
      <div style={{ padding: '20px' }}>
        <h2 style={{ color: '#1688EE', marginBottom: '10px' }}>{marker.name}</h2> 
        <br></br>
        {/* Carousel */}
        <div style={{ maxWidth: '100%', maxHeight: '300px', marginBottom: '20px' }}>
          <Slider {...settings}>
            {marker.photos && marker.photos.map((photo, index) => (
              <div key={index} >
                <img src={photo} alt={`pic ${index}`} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
              </div>
            ))}
          </Slider>
       
          <br></br>
        </div>
        {/* Description */}
        <p style={{ marginBottom: '20px', color: '#333' }}>
          <FaMapMarkerAlt /> Coordinates: {marker.latitude}, {marker.longitude}
        </p>
        <p style={{ marginBottom: '20px', color: '#333' }}>
          <FaInfoCircle /> Description: {marker.description}
        </p>
        <p style={{ marginBottom: '20px', color: '#333' }}>
          <FaBed /> Bedrooms: {marker.bedrooms}
        </p>
        <p style={{ marginBottom: '20px', color: '#333' }}>
          <FaCalendarAlt /> {marker.availability}
        </p>
        <p style={{ marginBottom: '20px', color: '#333' }}>
          <FaMoneyBillAlt /> Price: {marker.price}
        </p>
        <p style={{ marginBottom: '20px', color: '#333' }}>
          <FaPhone /> Phone Number: {marker.phoneNumber}
        </p>
        {/* Additional content */}
        {/* Add any additional content here */}
      </div>
    </div>
  ) : null;
};

export default Sidebar;
