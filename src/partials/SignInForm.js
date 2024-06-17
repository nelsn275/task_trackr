/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "SignInForm" div.
* CSS Code -- Use the SignInForm.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/

import React, { useState } from 'react';
import './RegistrationForm.css';
import { useAuth } from '../contexts/AuthContext'

function SignInForm()       {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, currentUser } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };


  const handleSubmit = async (e) => { // making this function async allows us to await on sign in and handle fail login error
    e.preventDefault();
    
    setError('');
    // Proceed with form submission or other actions
    console.log('Form submitted');

    try {
      await signIn(email, password) // sign in attempt (see AuthContext.js)
    }
    catch { // sign in fails with error
      setError('No password match. Check info and try again')
    }

  };


  return (
    <div className="registrationForm">
      <section id="registrationFormBox">
        <h1>Sign In</h1>
        <p>You are logged in as: {currentUser && currentUser.email}</p>
        <p>Welcome back to TaskTrackr! Please enter your login info. Here's to staying productive!</p>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="name">Provide Your Name:</label><br />
          <input type="text" id="name" name="name" required /><br /> */}
          
          <label htmlFor="email">Enter Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={handleEmailChange}
            /><br />
          
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password2"
            name="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number, one uppercase letter, one lowercase letter, and at least 8 characters"
            value={password}
            onChange={handlePasswordChange}
          /><br />
          
          {/* <label htmlFor="passwordConfirm">Confirm Password:</label><br />
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            required
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
            style={getPasswordConfirmStyle()}
          /><br /> */}
          
          {error && <span id="passwordError">{error}</span>}<br />
          
          <button type="submit">Sign In</button>
        </form>
        <p><a href="#">Forgot Username?</a> | <a href="#">Forgot Password?</a></p>
      </section>
    </div>
  );
}

export default SignInForm;