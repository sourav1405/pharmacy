import React from 'react';
import appStoreLogo from './Assets/app.jpg';
import playStoreLogo from './Assets/play.png';
import './FrontPage.css'; // Import CSS file for styling

const FrontPage = () => {
  return (
    <div className="frontpage-container">
      <div className="frontpage-content">
      <h2>All around better <br />health in one app</h2>
        <p>Sincerely Health empowers you. To eat well. Move more. Feel better.<br/> And earn rewards! We're your partner on the journey to a better you.</p>
        <div className="store-logos">
          <a href="https://play.google.com/store/apps/details?id=your-app-id">
            <img src={playStoreLogo} alt="Play Store" />
          </a>
          <a href="https://itunes.apple.com/app/your-app-id">
            <img src={appStoreLogo} alt="App Store" />
          </a>
        </div>
      </div>
      <div className="curved-image"></div>
    </div>
  );
};

export default FrontPage;
