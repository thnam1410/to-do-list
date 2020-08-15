import React, { useState } from "react";
import classNames from "classnames";
import "./TodoItem.css";
import checkImg from "../../assets/images/tick.png";
import checkCompletedImg from "../../assets/images/completedtick.png";

function TodoItem({ item, isCompleted, onClick, onClickDelete }) {
  const [onHover, setOnHover] = useState(false);

  const handleMouseEnter = () => {
    setOnHover(!onHover);
  };
  const handleMouseLeave = () => {
    setOnHover(!onHover);
  };

  let todoItemStyle = classNames({
    item: true,
    "TodoItem-completed": isCompleted,
  });
  let buttonHover = classNames({
    buttonDelete: true,
    "buttonDelete-hover": onHover,
  });
  return (
    <div
      className="ToDoItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={isCompleted ? checkCompletedImg : checkImg}
        onClick={onClick}
        alt="check pic"
      />
      <div className={todoItemStyle}>
        <p>{item}</p>
      </div>
      <button className={buttonHover} onClick={onClickDelete}>
        X
      </button>
    </div>
  );
}

export default TodoItem;
