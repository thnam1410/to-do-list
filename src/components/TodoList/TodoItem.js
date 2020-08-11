import React from "react";
import classNames from "classnames";
import "./TodoItem.css";

function TodoItem({ item, isCompleted, onClick }) {
  let todoItemStyle = classNames({
    item: true,
    "TodoItem-completed": isCompleted,
  });
  return (
    <div className="ToDoItem">
      <p className={todoItemStyle} onClick={onClick}>
        {item}
      </p>
    </div>
  );
}

export default TodoItem;
