import React, { useState } from "react";

const Input = ({ todos, setTodos }) => {
  const [todoText, setTodoText] = useState("");

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    // createTodo(todoText);
    createTodo({
        'body': todoText,
        'completed': false
    });
    setTodoText("");
  };

  return (
    <div className="container">
      <form
        onSubmit={submitTodo}
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <input
          className="form-control"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          type="text"
          name="task"
        />
        <button type="submit" className="add-btn">Add Task</button>
      </form>

    </div>
  );
};

export default Input;
