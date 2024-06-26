import Header from '../partials/Header';
import Footer from '../partials/Footer';
import check from '../assets/checkbox.png';
import './ThankYou.css';
import React from 'react';

const ThankYou = () => {
    ('Rendering ThankYou Page');
    return (
        <div>
            <div>
                <h1>Thank You For Registering to TaskTrackr!</h1>
                <div className='text'>
                    <p>Thank you for registering to TaskTrackr! We appreciate your time and hope that you 
                        can solve all of your task tracking related problems! To access your account click 
                        the Sign In button!
                    </p>
                </div>
                <img src={check} alt="Checkbox" className='checkbox'></img>
            </div>
        </div>
    );
}

export default ThankYou;