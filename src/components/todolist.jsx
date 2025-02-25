// TodoList.jsx
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggleComplete, onDelete, onEdit, onSave }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          onSave={onSave}
        />
      ))}
    </div>
  );
}

export default TodoList;
