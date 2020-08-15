import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todoLists")) {
      let storedLists = localStorage.getItem("todoLists");
      storedLists = JSON.parse(storedLists);
      setTodos([...storedLists]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoLists", JSON.stringify(todos));
  }, [todos]);

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
        isCompleted: false,
      },
    ]);
  };

  const handleOnClickDeleteItem = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  return (
    <div className="App">
      <Header addItem={handleAddItem} />
      <TodoList
        todoList={todos}
        onClickItem={handleOnClickItem}
        onClickDelete={handleOnClickDeleteItem}
      />
      <Footer />
    </div>
  );
}

export default App;
