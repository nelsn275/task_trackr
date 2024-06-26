import React, { useState } from 'react';
import TaskList from '../partials/TaskList';
import './Home.css';
import CreateTaskForm from '../partials/CreateTaskForm';


const Home = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

    console.log('Rendering Home Page');
  return (
    <div>
      <button id="create_task" onClick={toggleOverlay}>Create Task</button>
      <TaskList />
      {isOverlayVisible &&(
          <div className="overlay">
            <div className="overlay-content">
              <button className="close-button" onClick={toggleOverlay}>X</button>
              <CreateTaskForm />
            </div>
          </div>
        )}
    </div>
  );
}

export default Home;