import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';

function App() {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
    };
    setTodos([newTodo, ...todos]);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
