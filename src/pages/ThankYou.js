import React from 'react';
import './ThankYou.css';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

const ThankYou = () => {
    console.log('Rendering ThankYou Page');
  return (
    <div>
        <Header />
            <h1>Welcome to the TaskTrackr Team!</h1>
            <p>Thank you for joining! Stay productive and start Trackng!</p>
        <Footer />
    </div>
  );
}

export default ThankYou;