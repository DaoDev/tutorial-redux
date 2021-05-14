import TodoList from "./components/TodoList";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";

const TODO_APP_STORAGE_KEY = "TODO_APP";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const storageTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storageTodoList) {
      setTodoList(JSON.parse(storageTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback(
    (e) => {
      setTodoList([
        { id: v4(), name: textInput, isCompleted: false },
        ...todoList,
      ]);

      setTextInput("");
    },
    [textInput]
  );

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prevStore) =>
      prevStore.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);
  return (
    <div className="App">
      <h3>Danh sach can lam</h3>
      <TextField
        name="add-todo"
        placeholder="Them viec can lam..."
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={onAddBtnClick}
          >
            Them
          </Button>
        }
        css={{
          padding: "2px 4px 2px",
        }}
        value={textInput}
        onChange={onTextInputChange}
      ></TextField>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </div>
  );
}

export default App;
