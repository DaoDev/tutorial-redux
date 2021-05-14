import React from "react";
import PropTypes from "prop-types";
import Button from "@atlaskit/button";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";

Todo.propTypes = {};

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;

   &, &:hover {
    ${(p) =>
      p.isCompleted &&
      css`
        text-decoration: line-through;
      `}
    }
 

  .check-icon{
      display: none

      &:hover{
          background-color: #e2e2e2;
          border-radius: 3px
      }
  }
`;

function Todo(props) {
  const { todo, onCheckBtnClick } = props;
  return (
    <div>
      <ButtonStyled
        isCompleted={todo.isCompleted}
        shouldFitContainer
        iconAfter={
          !todo.isCompleted && (
            <span
              className="check-icon"
              onClick={() => onCheckBtnClick(todo.id)}
            >
              <CheckIcon primaryColor="#4fff4f" />
            </span>
          )
        }
      >
        {todo.name}
      </ButtonStyled>
    </div>
  );
}

export default Todo;
