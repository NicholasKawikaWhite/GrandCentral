import React from 'react';
import './header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">HARVARD CENTRAL</h1>
      <div className="profile-info">
        <div className="profile-pic">👤</div> {/* Generic profile pic symbol */}
        <div className="profile-details">
        </div>
      </div>
      <div className="box-container">
        <div className="box">Free Stuff</div>
        <div className="box">Events</div>
        <div className="box">Parties</div>
      </div>
      <button className="add-button">Add Your Own!</button>
    </div>
  );
};

export default Header;