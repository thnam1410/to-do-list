import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoList, onClickItem }) {
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
        />
      ))}
    </div>
  );
}

export default TodoList;
