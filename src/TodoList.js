import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, setTasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </ul>
  );
}

export default TodoList;
