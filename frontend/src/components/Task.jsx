
// Task.jsx

import React from 'react';
import axios from 'axios';
import instance from '../api';
import './Task.css'; // Import CSS file for Task styling

const Task = ({ task, fetchTasks }) => {
  const handleDelete = async () => {
    try {
      await instance.delete(`/api/tasks/${task._id}`);
      fetchTasks(); // Fetch tasks after deleting task
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleToggleStatus = async () => {
    try {
      await instance.patch(`/api/tasks/${task._id}/toggle`);
      fetchTasks(); // Fetch tasks after toggling status
    } catch (error) {
      console.error('Error toggling task status:', error);
    }
  };

  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p className="task-description">Description: {task.description}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <div className="task-buttons">
        <button onClick={handleToggleStatus}>
          {task.status === 'complete' ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
