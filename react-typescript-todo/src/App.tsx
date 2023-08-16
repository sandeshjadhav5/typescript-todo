import React, { useState } from "react";
import InputField from "./Components/InputField";
import { Todo } from "./model";

import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  // console.log(todo);

  const handleAddTodos = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>TODO PLANNER</h1>
      <div>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAddTodos={handleAddTodos}
        />
      </div>
    </>
  );
};

export default App;
