import React from 'react';
import Header from '../partials/Header';
import RegistrationForm from '../partials/RegistrationForm';
import { AuthProvider } from '../contexts/AuthContext';
import Footer from '../partials/Footer';

const Registration = () => {
    console.log('Rendering Registration Page');
  return (
    <div>
        <Header />
        <AuthProvider>
          <RegistrationForm />
        </AuthProvider>
        <Footer />
    </div>
  );
}

export default Registration;