import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddItem = (input) => {
    setTodos([
      ...todos,
      {
        todo: input,
        isCompleted: true,
      },
    ]);
  };
  const handleOnClickItem = (event) => {
    console.log(event.target.value);
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
