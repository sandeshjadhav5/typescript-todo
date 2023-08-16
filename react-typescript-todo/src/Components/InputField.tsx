import React from "react";
import "./styles.css";

const InputField: React.FC = () => {
  return (
    <>
      <form className="input_Form">
        <input className="input_box" type="input" placeholder="Enter a task" />

        <button type="submit" className="input_submit">
          Add
        </button>
      </form>
    </>
  );
};

export default InputField;
