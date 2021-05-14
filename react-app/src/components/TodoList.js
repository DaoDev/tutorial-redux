import React from "react";
import PropTypes from "prop-types";
import Button from "@atlaskit/button";
import Todo from "./Todo";

TodoList.propTypes = {};

function TodoList(props) {
  const { todoList, onCheckBtnClick } = props;
  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} />
      ))}
    </div>
  );
}

export default TodoList;
