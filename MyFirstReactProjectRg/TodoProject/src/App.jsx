import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/ToDoCreate";
import ToDoList from "./components/ToDoList";
function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeMyTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  const updateTodo = (updateTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== updateTodo.id) {
        return todo;
      }
      return updateTodo;
    });
    setTodos([...updatedTodos]);
  };

  return (
    <>
      <div className="App">
        <div
          style={{
            width: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TodoCreate onCreateTodo={createTodo} />
          <ToDoList
            todos={todos}
            onRemoveTodo={removeMyTodo}
            onUpdateTodo={updateTodo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
