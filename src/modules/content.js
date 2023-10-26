import React from 'react';
import './content.css'; // Import the CSS file for styling

const Content = () => {
  // Define an array of data for the boxes
  const data = [
    {
      header: 'FREE',
      address: '123 Main St, Boston, MA',
      description: 'Enjoy free samples and giveaways!',
      status: 'NOW',
    },
    {
      header: 'PARTY',
      address: '456 Elm St, Cambridge, MA',
      description: 'Join us for a night of music and dancing!',
      status: 'SOON',
    },
    {
      header: 'EVENT',
      address: '789 Oak St, Somerville, MA',
      description: 'A family-friendly event with food and activities!',
      status: 'LATER',
    },
    // Add more data for additional boxes
  ];

  return (
    <div className="content-container">
      {data.map((item, index) => (
        <div className="content-box" key={index}>
          <div className="box-header">{item.header}</div>
          <div className="box-address">{item.address}</div>
          <div className="box-description">{item.description}</div>
          <div className="box-status">{item.status}</div>
        </div>
      ))}
    </div>
  );
};

export default Content;