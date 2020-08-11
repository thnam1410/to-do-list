import React from "react";
import classNames from "classnames";
import "./TodoItem.css";

function TodoItem({ item, isCompleted }) {
  let todoItemStyle = classNames({
    TodoItem: true,
    "TodoItem-completed": true,
  });
  return <div className={todoItemStyle}>{item}</div>;
}

export default TodoItem;
