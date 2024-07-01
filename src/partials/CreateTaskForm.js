import React, { useState } from 'react';
import './CreateTaskForm.css';
import { db, auth } from '../firebase';


// For some reason ChatGPT wanted it set up like this
function CreateTaskForm() {
  const [formData, setFormData] = useState({
    title: '',
    when: '',
    where: '',
    who: '',
    description: ''
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // When the form is submitted
  const saveTask = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const user = auth.currentUser;
    console.log('USer: ' + user)
    if (user) {
      try {
        await db.collection('tasks').add({
          ...formData,
          userId: user.uid,
        });
        alert('Task submitted successfully!');
        setFormData({
          title: '',
          when: '',
          where: '',
          who: '',
          description: ''
        });
      } catch (error) {
        console.error('Error adding document: ', error);
        alert('Failed to submit task. Please try again.', error);
      }
    } else {
      alert('You must be logged in to submit a task.');
    }
  };

  return (
    <section className="createTaskForm">
      <form onSubmit={saveTask}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required /><br />

        <label htmlFor="when">When is it happening?</label>
        <input type="date" id="when" name="when" value={formData.when} onChange={handleChange} required /><br />

        <label htmlFor="where">Where is it happening?</label>
        <input type="text" id="where" name="where" value={formData.where} onChange={handleChange} /><br />

        <label htmlFor="who">Who's going?</label>
        <input type="text" id="who" name="who" value={formData.who} onChange={handleChange} /><br />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea><br />

        <button id="submit" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default CreateTaskForm;
