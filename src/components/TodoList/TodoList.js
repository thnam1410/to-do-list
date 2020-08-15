import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todoList, onClickItem, onClickDelete }) {
  return (
    <div className="todolist">
      {todoList.map((todo, index) => (
        <TodoItem
          key={index}
          item={todo.todo}
          isCompleted={todo.isCompleted}
          onClick={() => {
            onClickItem(todo, index);
          }}
          onClickDelete={() => {
            onClickDelete(index);
          }}
        />
      ))}
    </div>
  );
}

export default TodoList;
