import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, onRemoveTodo, onUpdateTodo }) {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", marginTop: "50px" }}>
        {todos &&
          todos.map((todo) => {
            return (
              <ToDo
                key={todo.id}
                todo={todo}
                removeTd={onRemoveTodo}
                updatliyorum={onUpdateTodo}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ToDoList;
