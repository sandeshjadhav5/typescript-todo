import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodos: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodos }) => {
  return (
    <>
      <form className="input_Form" onSubmit={handleAddTodos}>
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
