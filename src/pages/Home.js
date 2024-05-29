import React from 'react';
import PartialShowcase from '../partials/PartialShowcase';

const Home = () => {
    console.log('Rendering Home Page');
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <PartialShowcase />
    </div>
  );
}

export default Home;