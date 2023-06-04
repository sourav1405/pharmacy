import React from 'react';
import './full.css'; // Import CSS file for styling
import x from './Assets/s.png'

const FullWidthImage = () => {
  return (
    <div className="image-container">
      <img src={x} alt="Full Width Image" className="full-width-image" />
    </div>
  );
};

export default FullWidthImage;
