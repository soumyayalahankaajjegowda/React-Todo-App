// App.jsx
import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

// Initial state data
const initialState = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  }
  // Add more items from your original initialState here if needed
];

// Map initialState to include isEditing property
const initialTodos = initialState.map(todo => ({
  ...todo,
  isEditing: false
}));

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (title) => {
    if (title.trim()) {
      setTodos([{ 
        id: Date.now(), // Using Date.now() for unique IDs for new todos
        title, 
        completed: false,
        isEditing: false 
      }, ...todos]);
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isEditing: true } : todo
    ));
  };

  const saveEdit = (id, newTitle) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, title: newTitle, isEditing: false } : todo
    ));
  };

  return (
    <div className="app-container">
      <h1 className="todo-heading">Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList 
        todos={todos} 
        onToggleComplete={toggleComplete}
        onDelete={deleteTodo}
        onEdit={startEditing}
        onSave={saveEdit}
      />
    </div>
  );
}

export default App;