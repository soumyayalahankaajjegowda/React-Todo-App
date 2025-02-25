// TodoEdit.jsx
import { useState } from "react";

function TodoEdit({ todo, onSave }) {
  const [editValue, setEditValue] = useState(todo.title);

  return (
    <>
      <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        className="edit-input"
      />
      <button
        onClick={() => onSave(todo.id, editValue)}
        className="save-button"
      >
        Save
      </button>
    </>
  );
}

export default TodoEdit;
