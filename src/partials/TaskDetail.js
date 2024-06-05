/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "taskDetail" div.
* CSS Code -- Use the TaskDetail.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/

import './TaskDetail.css';
import events from '../test.json';
import React, { useState } from 'react';

function TaskDetail() {
  

  return (
    <div className="taskDetail">
      <h1>TaskDetail</h1>
      <div>
        <p>Combined with task list</p>
      </div>
    </div>
  );
}

export default TaskDetail;