/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "registrationForm" div.
* CSS Code -- Use the RegistrationForm.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/

import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError('Passwords do not match.');
    } else {
      setError('');
      // Proceed with form submission or other actions
      console.log('Form submitted');
    }
  };

  const getPasswordConfirmStyle = () => {
    if (passwordConfirm === '') {
      return {};
    }
    return password === passwordConfirm ? { backgroundColor: '#BBFFA7' } : { backgroundColor: '#FFB6A7' };
  };

  return (
    <div className="registrationForm">
      <section id="registrationFormBox">
        <h1>Registration Form</h1>
        <p>We're excited for you to join TaskTrackr! Please enter some basic information to create an account. Here's to staying productive!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Provide Your Name:</label><br />
          <input type="text" id="name" name="name" required /><br />
          
          <label htmlFor="userName">Create Username:</label><br />
          <input type="text" id="userName" name="userName" required /><br />
          
          <label htmlFor="password">Enter Password:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number, one uppercase letter, one lowercase letter, and at least 8 characters"
            value={password}
            onChange={handlePasswordChange}
          /><br />
          
          <label htmlFor="passwordConfirm">Confirm Password:</label><br />
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            required
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
            style={getPasswordConfirmStyle()}
          /><br />
          
          {error && <span id="passwordError">{error}</span>}<br />
          
          <button type="submit">Start Tracking!</button>
        </form>
        <p>Already have an account? <a href="#">Sign In</a></p>
      </section>
    </div>
  );
}

export default RegistrationForm;