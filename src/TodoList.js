import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleComplete }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
}

export default TodoList;
