/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "taskDetail" div.
* CSS Code -- Use the TaskDetail.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/
import './TaskDetail.css';
import React, { useState } from 'react';

function TaskDetail() {
    return(
      <div className='taskDetail-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46051.894752068925!2d-111.7881829!3d43.83005045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53540a4b807a98b1%3A0x4a49d8d1d2181c73!2sRexburg%2C%20ID!5e0!3m2!1sen!2sus!4v1718031863546!5m2!1sen!2sus" width="600" height="450" style={{ border: '0', display: 'block', margin: '0 auto' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    );
  }

export default TaskDetail;