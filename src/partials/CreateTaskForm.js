/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "createTaskForm" div.
* CSS Code -- Use the createTaskForm.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/

import './CreateTaskForm.css';

function CreateTaskForm() {
  return (
    <section className="createTaskForm">
      <form>
        {/* Title and Date are both required */}
        <label htmlFor="title">Title:</label>
        <input type="text" id="taskTitle" name="title" required /><br />

        <label htmlFor="when">When is it happening?</label>
        <input type="date" id="when" name="when" required /><br />

        {/* Where, who, and the description are all optional */}
        <label htmlFor="where">Where is it happening?</label>
        <input type="text" id="where" name="where" /><br />

        <label htmlFor="who">Who's going?</label>
        <input type="text" id="who" name="who"/><br />

        <label htmlFor="description">Description</label>
        <textarea type="text" id="description" name="description"></textarea><br />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default CreateTaskForm;