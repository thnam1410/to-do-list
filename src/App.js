import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleOnClickItem = (item, index) => {
    setTodos([
      ...todos.slice(0, index),
      {
        ...item,
        isCompleted: !item.isCompleted,
      },
      ...todos.slice(index + 1),
    ]);
  };

  const handleAddItem = (input) => {
    setTodos([
      ...todos,
      {
        todo: input,
        isCompleted: true,
      },
    ]);
  };

  return (
    <div className="App">
      <Header addItem={handleAddItem} />
      <TodoList todoList={todos} onClickItem={handleOnClickItem} />
      <Footer />
    </div>
  );
}

export default App;
