/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "UpdateProfileForm" div.
* CSS Code -- Use the UpdateProfileForm.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/

import React, { useState } from 'react';
import './UpdateProfileForm.css';
import { useAuth } from '../contexts/AuthContext';

function UpdateProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

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

    currentUser.updateProfile({ displayName: name, email: email });
  };

  const getPasswordConfirmStyle = () => {
    if (passwordConfirm === '') {
      return {};
    }
    return password === passwordConfirm ? { backgroundColor: '#BBFFA7' } : { backgroundColor: '#FFB6A7' };
  };

  return (
    <div className="updateProfileForm">
      <section id="updateProfileFormBox">
        <h1>Update P<span id='blue'>r</span>ofile</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Update Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          /><br />

          <label htmlFor="email">Update Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          /><br />

          <label htmlFor="password">Update Password:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          /><br />

          <label htmlFor="passwordConfirm">Confirm Password:</label><br />
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
            placeholder="Confirm your password"
            style={getPasswordConfirmStyle()}
          /><br />

          {error && <span id="passwordError">{error}</span>}<br />

          <button type="submit">Update Profile</button>
        </form>
      </section>
    </div>
  );
}

export default UpdateProfileForm;