// Sidebar.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    <div style={{ width: 350, height: 700, position: 'absolute', bottom: 0, right: 0, backgroundColor: '#ECEEF1', zIndex: 9999 }}>
      {/* Close button */}
      <button onClick={handleClose} style={{ position: 'absolute', top: '5px', right: '5px', zIndex: 1000 }}>Close</button>
      {/* Display marker information */}
      <h2 style={{color:'#1688EE'}}>{marker.name}</h2>
      <div style={{ maxWidth: '100%', maxHeight: '400px', marginBottom: '10px' }}>
        {/* Display carousel */}
        <Slider {...settings}>
          {marker.photos && marker.photos.map((photo, index) => (
            <div key={index}>
              <img src={photo} alt={`Photo ${index}`} style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </Slider>

        <p style={{marginTop:'50px'}}>Description: {marker.description}</p>
      </div>
    </div>
  ) : null;
};

export default Sidebar;
