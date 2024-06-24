import React from 'react';
import './Profile.css';
import UpdateProfileForm from '../partials/UpdateProfileForm';

const Profile = () => {
  return (
  <section className="profile">
    <div className="profile-container">
      <main>
        <UpdateProfileForm />
      </main>
    </div>
  </section>
  );
};

export default Profile;
