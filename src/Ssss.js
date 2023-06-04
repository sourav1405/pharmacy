import React from 'react';
import './ssss.css'; // Import CSS file for styling
import hhh from './Assets/s1.jpg';
import h from './Assets/s2.png';

const Second = () => {
  return (
    <div className="co">
      <h2>Come on over: We’re more rewarding!</h2>
      <div className="components-container">
        <div className="component1s">
          <img src={hhh} alt="Photo 1" className="photo" />
          <div className="content">
            <h3>$25 to transfer + 20% refill bonus¹</h3>
            <p>Get $25 off groceries with your first Rx transfer, and enjoy 20% off every 5 refills.</p>
            <a href="https://www.albertsons.com/health/pharmacy/guest-transfer-prescription">Learn More</a>
          </div>
          <div className="arrow"></div>
        </div>
        <div className="component2s">
          <img src={h} alt="Photo 2" className="photo" />
          <div className="content">
            <h3>Get 10% off with any vaccine²</h3>
            <p>Every vaccine you get at our pharmacy – gets you 10% off (up to $20) your next grocery purchase.</p>
            <a href="https://www.albertsons.com/vaccinations/home?from=home">Learn More</a>
          </div>
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default Second;

