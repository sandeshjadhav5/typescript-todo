import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <>
      <form className="input_Form">
        <input
          className="input_box"
          type="input"
          placeholder="Enter a task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit" className="input_submit">
          Add
        </button>
      </form>
    </>
  );
};

export default InputField;
