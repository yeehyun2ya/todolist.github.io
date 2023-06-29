import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/Todoform';

const App = () => {
  const [todos, setTodos] = useState([]);
  const currentDate = new Date().toLocaleDateString();

  const addTodo = todo => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  };

  return (
    <div style={{ fontFamily: "'Black Han Sans', sans-serif", textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>Todo List</h1>
      <h2 style={{ marginBottom: '10px' }}>Today's Date: {currentDate}</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      <style>
        {`
          button {
            padding: 5px 10px;
            background-color: #000;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
          }
  
          button:hover {
            background-color: #333;
          }

          input[type="text"] {
            width: 300px; /* 원하는 너비로 조정 */
            padding: 8px;
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
  
};

export default App;
