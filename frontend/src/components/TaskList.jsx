// TaskList.jsx

import React from 'react';
import Task from './Task';
import './TaskList.css'; // Import CSS file for TaskList styling

const TaskList = ({ tasks, fetchTasks }) => {
  return (
    <div className="task-list-container">
      <h2>Tasks</h2>
      <div className="tasks">
        {tasks.map((task) => (
          <Task key={task._id} task={task} fetchTasks={fetchTasks} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
