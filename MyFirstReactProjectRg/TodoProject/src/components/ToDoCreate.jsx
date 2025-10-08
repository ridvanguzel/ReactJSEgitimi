import React, { useState } from "react";
import "../App.css";
function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearInputTodo = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 9999999),
      content: newTodo,
    };
    onCreateTodo(request);
    clearInputTodo();
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="Todo giriniz"
      />
      <button onClick={createTodo} className="todo-create-btn">
        Todo Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;
