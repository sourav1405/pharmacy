import React from 'react';
import './Third.css'; // Import CSS file for styling
import hhh from './Assets/t1.jpg'
import hh from './Assets/t2.png'
import h from './Assets/t3.png'
import h1 from './Assets/t4.jpg'

const Third = () => {
  return (
    <div className="contain">
      <div className="row">
        <div className="comp">
        <img src={hhh} alt="Photo 1" className="photo" />
          <div className="content">
            <h3>Prescription fills</h3>
            <p>Easily transfer, manage, and refill your prescription medications..</p>
          </div>
        </div>
        <div className="comp">
        <img src={hh} alt="Photo 1" className="photo" />
          <div className="content">
            <h3>Vaccine appointments</h3>
            <p>Protect everyone in your family. Select and schedule vaccinations in a snap..</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="comp">
        <img src={h} alt="Photo 1" className="photo" />
          <div className="content">
            <h3>Care services</h3>
            <p>Find the care you need for travel, your mental wellbeing or health recovery.</p>
          </div>
        </div>
        <div className="comp">
        <img src={h1} alt="Photo 1" className="photo" />
          <div className="content">
            <h3>Fill pet prescriptions</h3>
            <p>Save up to 80% on pet medications when you choose our pharmacy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
