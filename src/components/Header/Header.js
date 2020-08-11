import React, { useState } from "react";
import "./Header.css";

function Header({ addItem }) {
  const [input, setInput] = useState("");

  const handleOnChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    if (event.keyCode === 13) {
      addItem(input);
      setInput("");
    }
  };
  return (
    <header className="header">
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={input}
        onChange={handleOnChange}
        onKeyUp={handleSubmit}
      ></input>
    </header>
  );
}

export default Header;
