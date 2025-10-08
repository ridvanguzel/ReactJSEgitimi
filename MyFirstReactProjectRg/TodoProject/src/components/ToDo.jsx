import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import "../App.css";

function ToDo({ todo, removeTd, updatliyorum }) {
  const { id, content } = todo;

  const [editable, setEditable] = useState(false);
  const [editTodoItem, setUpdateTodo] = useState(content);

  const removeMyTodo = () => {
    removeTd(id);
  };
  const updateTodo = () => {
    const request = {
      id: id,
      content: editTodoItem,
    };
    updatliyorum(request);
    setEditable(false);
  };

  return (
    <div
      className="todo-item"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10px",
      }}
    >
      <div>
        {editable ? (
          <input
            value={editTodoItem}
            onChange={(e) => setUpdateTodo(e.target.value)}
            className="todo-input"
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeMyTodo} />
        {editable ? (
          <FaCheck className="todo-icons" onClick={updateTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default ToDo;
