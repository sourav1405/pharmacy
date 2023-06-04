import React from 'react';
import appStoreLogo from './Assets/app.jpg';
import playStoreLogo from './Assets/play.png';
import './six.css'; // Import CSS file for styling

const FrontPage = () => {
  return (
    <div className="six-container">
      <div className="six-content">
      <h2>Where your personal<br/> wellbeing comes first</h2>
        <p>Your stress, anxiety and sleep factor into your physical, emotional and mental wellbeing. It’s all part of your personal Health Score, too. Our app reflects your progress – and charts next best steps. </p>
        <div className="store-logos">
          <a href="https://play.google.com/store/apps/details?id=your-app-id">
            <img src={playStoreLogo} alt="Play Store" />
          </a>
          <a href="https://itunes.apple.com/app/your-app-id">
            <img src={appStoreLogo} alt="App Store" />
          </a>
        </div>
      </div>
      <div className="curved-imag"></div>
    </div>
  );
};

export default FrontPage;
