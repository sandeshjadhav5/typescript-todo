import React from "react";
import InputField from "./Components/InputField";

import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <h1>TODO PLANNER</h1>
      <div>
        <InputField />
      </div>
    </>
  );
};

export default App;
