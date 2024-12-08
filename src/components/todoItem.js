import React from 'react';

function TodoItem({ todo, deleteTodo }) {
  return (
    <li>
      {todo.title}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
