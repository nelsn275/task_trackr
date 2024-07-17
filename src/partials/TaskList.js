/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "taskList" div.
* CSS Code -- Use the TaskList.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/

import './TaskList.css';
import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Adjust the path to your firebase.js file

function TaskList() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const userId = 'aIiXCBofImhgSs5SbZ8G7mpUMvf2'; // Replace with actual user ID or fetch dynamically from authentication
    const fetchTasks = async () => {
      try {
        const tasksRef = db.collection('tasks'); // Access Firestore collection using db instance
        const snapshot = await tasksRef.where('userId', '==', userId).get();
        const fetchedTasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Fetched tasks:', fetchedTasks); // Log fetched tasks to check in console
        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []); // Empty dependency array ensures this effect runs only once

  const toggleOverlay = (index) => {
    setSelectedTaskIndex(index);
    setOverlayVisible(!isOverlayVisible);
  };

  const task = selectedTaskIndex !== null ? tasks[selectedTaskIndex] : null;

  return (
    <div className="taskList">
      <h1>Task List + Task Detail</h1>
      <ul className="taskUl">
        {tasks.map((task, index) => (
          <div key={task.id} className="taskDiv">
            <button onClick={() => toggleOverlay(index)}>
              <p className="pTitle">{task.title}</p>
              <p>When: {new Date(task.when).toLocaleString()}</p>
            </button>
          </div>
        ))}
      </ul>

      {isOverlayVisible && task && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-button" onClick={toggleOverlay}>X</button>
            <h2>{task.title}</h2>
            <p><strong>When:</strong> {new Date(task.when).toLocaleString()}</p>
            <p><strong>Where:</strong> {task.where}</p>
            <p><strong>Who:</strong> {task.who}</p>
            <p><strong>Description:</strong> {task.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskList;
