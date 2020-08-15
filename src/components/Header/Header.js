import React, { useState } from "react";
import "./Header.css";
import checkAll from "../../assets/images/checkAll.png";
import checkAllCompleted from "../../assets/images/checkAllCompleted.png";
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
      <div className="header-input">
        <img className="checkAllButton" src={checkAll}></img>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={handleOnChange}
          onKeyUp={handleSubmit}
        ></input>
      </div>
    </header>
  );
}

export default Header;
