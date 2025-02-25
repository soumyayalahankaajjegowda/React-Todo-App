// TodoItem.jsx
import TodoEdit from "./TodoEdit";

function TodoItem({ todo, onToggleComplete, onDelete, onEdit, onSave }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />

      {todo.isEditing ? (
        <TodoEdit todo={todo} onSave={onSave} />
      ) : (
        <>
          <span className={todo.completed ? "completed" : ""}>
            {todo.title}
          </span>
          <button onClick={() => onEdit(todo.id)} className="edit-button">
            Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            disabled={!todo.completed}
            className="delete-button"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
