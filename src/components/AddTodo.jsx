// AddTodo.jsx
import { useState } from "react";

function AddTodo({ onAdd }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
        className="todo-input"
      />
      <button onClick={handleAdd} className="add-button">
        Add
      </button>
    </div>
  );
}

export default AddTodo;
