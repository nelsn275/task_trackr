import React from 'react';
import './Login.css';
import Header from '../partials/Header';
import SignInForm from '../partials/SignInForm';
import Footer from '../partials/Footer';

const Login = () => {
    console.log('Rendering Login Page');
  return (
    <div>
        <Header />
        <SignInForm />
        <Footer />
    </div>
  );
}

export default Login;