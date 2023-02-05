import React, { useState } from "react";
import "./css/TodoForm.css";

function TodoForm() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the todo to the list of todos
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
