import React from 'react';

function TodoItem({ task, toggleComplete }) {
  const handleChange = () => {
    toggleComplete(task.id);
  };

  return (
    <li className="todo-item">
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <span className={task.completed ? 'completed' : ''}>{task.task}</span>
    </li>
  );
}

export default TodoItem;
