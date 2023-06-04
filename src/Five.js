import React from 'react';
import './five.css'; // Import CSS file for styling

const Five = () => {
  return (
    <div className="con">
      <div className="contain">
        <h2>Help for Your Health & Wellbeing.</h2>
      </div>
      <div className="row">
        <div className="componen">
          <h2>Tune into personal health insights</h2>
          <p>
            Finally, healthy habits you can stick to! Set goals and take steps
            on your journey to feel more fit – physically and mentally.
          </p>
        </div>
        <div className="componen">
          <h2>Easy access: on-demand care</h2>
          <p>
            Need to schedule travel vaccinations? Manage refills? Order pet
            meds? Your Health app connects you to the care and convenience you
            need.
          </p>
        </div>
        <div className="componen">
          <h2>Get rewards for your success</h2>
          <p>
            We’re here to cheer on your progress. Your rewards – and grocery
            savings keep coming with every new achievement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Five;
