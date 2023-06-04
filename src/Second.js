import React from 'react';
import './second.css'; // Import CSS file for styling
import hhh from './Assets/hhh.png';

const Second = () => {
    return (
        <div className="c">
          <div className="comp1">
          <img src={hhh} alt="Photo 1" className="photo" />

            <div className="content">
              <h3>Pharmacy at your fingertips</h3>
              <p>Manage your medications, get refill reminders, schedule vaccines and more – all with our Health app. </p>
              <a href="https://www.albertsons.com/health/pharmacy/dashboard">Learn More</a>
            </div>
            <div className="arrow"></div>
          </div>
          <div className="comp2">
          <img src={hhh} alt="Photo 1" className="photo" />
            <div className="content">
              <h3>Start your health journey here</h3>
              <p>Discover your personal Health Score and how to level up. Set goals to eat better, exercise more -- and earn grocery rewards.</p>
              <a href="https://www.albertsons.com/health/pharmacy/dashboard">Learn More</a>
            </div>
            <div className="arrow"></div>
          </div>
        </div>
      );
    };

export default Second;
