import React from 'react';
import './Dashboard.css';
import PartialShowcase from '../partials/PartialShowcase';

const Dashboard = () => {
    console.log('Rendering Dashboard Page');
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Welcome to the Dashboard page!</p>
      <PartialShowcase />
    </div>
  );
}

export default Dashboard;