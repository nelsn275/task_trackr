/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "taskList" div.
* CSS Code -- Use the TaskList.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/

import './TaskList.css';
import tasks from '../test.json';
import React, { useState } from 'react';


function TaskList() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const toggleOverlay = (index) => {
    setSelectedTaskIndex(index);
    setOverlayVisible(!isOverlayVisible);
  };

  const task = selectedTaskIndex !== null ? tasks[selectedTaskIndex] : null;



  return (
    <div className="taskList">
        <ul className="taskUl">
        {tasks.map((task, index) => (
          <div key={task} className="taskDiv">
            <button onClick={() => toggleOverlay(index)}>
              <p className="pTitle">{task.What}</p>
              <p>When: {new Date(task.When).toLocaleString()}</p>
            </button>
          </div> 
        ))}
        </ul>

        {isOverlayVisible && task && (
          <div className="overlay">
            <div className="overlay-content">
              <button className="close-button" onClick={toggleOverlay}>X</button>
              <h2>{task.What}</h2>
              <p><strong>When:</strong> {new Date(task.When).toLocaleString()}</p>
              <p><strong>Where:</strong> {task.Where}</p>
              <p><strong>Who:</strong> {task.Who}</p>
              <p><strong>Description:</strong> {task.Description}</p>
            </div>
          </div>
        )}
    </div>
  );
}

export default TaskList;