/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "taskList" div.
* CSS Code -- Use the TaskList.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/

import './TaskList.css';
import tasks from '../test.json';
import TaskDetail from './TaskDetail';

function TaskList() {
  return (
    <div className="taskList">
        <h1>Task List</h1>
        <ul className="taskUl">
        {tasks.map((task, index) => (
          <div key={task} className="taskDiv">
            <button onClick={TaskDetail}>
              <p className="pTitle">{task.What}</p>
              <p>When: {new Date(task.When).toLocaleString()}</p>
            </button>
          </div> 
        ))}
        </ul>
    </div>
  );
}

export default TaskList;