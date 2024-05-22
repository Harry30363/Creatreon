import React, { useState } from 'react';
import './Dashboard.css'; // Import CSS file for styling

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="Dashboard_dashboard">
      <div className="Dashboard_sidebar">
        <ul>
          <li>My page</li>
          <li>Audience</li>
          <li>Insights</li>
          <li>Payouts</li>
          <li>Community</li>
          <li>Notifications</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="Dashboard_content">
        <div className="Dashboard_header">
          <div className="Dashboard_profile">
            <div className="Dashboard_profile-pic"></div>
            <div className="Dashboard_profile-info">
              <h2>harry$$</h2>
              <a href="https://patreon.com/harry363">creatreon.com/harry363</a>
              <button onClick={toggleModal} className="Dashboard_create-button">Create</button>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="Dashboard_modal">
            <div className="Dashboard_modal-content">
              <h3>Select a type</h3>
              <ul>
                <li>Text</li>
                <li>Video</li>
                <li>Audio</li>
                <li>Image</li>
                <li>Link</li>
                <li>Poll</li>
                <li>Livestream</li>
              </ul>
              <button onClick={toggleModal} className="Dashboard_close-button">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
