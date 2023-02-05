import React from 'react';

function TodoItem({ task, tasks, setTasks }) {
  const handleChange = () => {
    setTasks(
      tasks.map((t) => {
        if (t === task) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      })
    );
  };

  return (
    <li className="todo-item">
      <input type="checkbox" checked={task.isCompleted} onChange={handleChange} />
      <span className={task.isCompleted ? 'completed' : ''}>{task.text}</span>
    </li>
  );
}

export default TodoItem;
