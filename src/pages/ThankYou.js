import Header from '../partials/Header';
import Footer from '../partials/Footer';
import React from 'react';

const ThankYou = () => {
    ('Rendering ThankYou Page');
    return (
        <div>
            <Header/>
            <div>
                <h1>Thank You Page</h1>
            </div>
            <Footer toplink="thankyou"/>
        </div>
    );
}

export default ThankYou;