import React, { useState } from 'react';
import TodoList from './TodoList';

function ToDoApp() {
  const [tasks, setTasks] = useState([
    { text: 'Learn React', isCompleted: false },
    { text: 'Build a To-Do app', isCompleted: false },
    { text: 'Make some coffee', isCompleted: false },
  ]);

  return (
    <div className="todo-app">
      <h1>My To-Do List</h1>
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default ToDoApp;
