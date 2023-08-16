import React, { useState } from "react";
import InputField from "./Components/InputField";

import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo);
  return (
    <>
      <h1>TODO PLANNER</h1>
      <div>
        <InputField todo={todo} setTodo={setTodo} />
      </div>
    </>
  );
};

export default App;
