import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import './UserTasks.css';

function UserTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const q = query(collection(db, 'tasks'), where('userId', '==', user.uid));
          const querySnapshot = await getDocs(q);
          const tasksData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setTasks(tasksData);
        } catch (err) {
          setError('Failed to fetch tasks. Please try again.');
          console.error('Error fetching tasks: ', err);
        } finally {
          setLoading(false);
        }
      } else {
        setError('You must be logged in to view tasks.');
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleOverlay = (task) => {
    setSelectedTask(task);
    setOverlayVisible(!isOverlayVisible);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="userTasks">
      <h2>Your Tasks</h2>
      <ul className="taskUl">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <div key={task.id} className="taskDiv">
              <button onClick={() => toggleOverlay(task)}>
                <p className="pTitle">{task.title}</p>
                <p>When: {new Date(task.when).toLocaleString()}</p>
              </button>
            </div>
          ))
        ) : (
          <p>No tasks found.</p>
        )}
      </ul>

      {isOverlayVisible && selectedTask && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-button" onClick={() => toggleOverlay(null)}>X</button>
            <h2>{selectedTask.title}</h2>
            <p><strong>When:</strong> {new Date(selectedTask.when).toLocaleString()}</p>
            <p><strong>Where:</strong> {selectedTask.where}</p>
            <p><strong>Who:</strong> {selectedTask.who}</p>
            <p><strong>Description:</strong> {selectedTask.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserTasks;