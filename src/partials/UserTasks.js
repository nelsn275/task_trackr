import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

function UserTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return React.createElement('div', null, 'Loading...');
  }

  if (error) {
    return React.createElement('div', null, error);
  }

  return React.createElement(
    'section',
    { className: 'userTasks' },
    React.createElement('h2', null, 'Your Tasks'),
    tasks.length > 0 ? (
      tasks.map(task => (
        React.createElement('div', { key: task.id, className: 'task' },
          React.createElement('h3', null, task.title),
          React.createElement('p', null, `When: ${task.when}`),
          React.createElement('p', null, `Where: ${task.where}`),
          React.createElement('p', null, `Who: ${task.who}`),
          React.createElement('p', null, task.description)
        )
      ))
    ) : (
      React.createElement('p', null, 'No tasks found.')
    )
  );
}

export default UserTasks;
