// Import necessary dependencies
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FaTrash } from 'react-icons/fa';

// Main TodoApp component, which holds the complete state and manages the app logic
const TodoApp = () => {
  // Dummy initial data for the todos list
  const dummyData = [
    { id: uuid(), text: "Learn React", completed: false },
    { id: uuid(), text: "Go for swimming lesson", completed: false },
    { id: uuid(), text: "Learn Node.js", completed: false },
    { id: uuid(), text: "Learn Tailwind", completed: false },
    { id: uuid(), text: "Buy Some Groceries", completed: false },
  ];

  // State to store the list of todos
  const [todos, setTodos] = useState(dummyData);

  // Function to add a new todo to the list
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Function to delete a todo by filtering it out of the state list
  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  // Function to toggle the completion state of a todo
  const markTodo = (todoId) => {
    setTodos(
      todos.map(todo => 
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Todo List</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} markTodo={markTodo} />
    </div>
  );
};

// Form component to add a new todo item to the list
const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  // Handles adding a todo and clearing the input field
  const clickHandler = () => {
    if (todo.trim()) {
      addTodo({
        id: uuid(),
        text: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter a new task"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        style={{ padding: '8px', width: '75%', marginRight: '10px' }}
      />
      <button onClick={clickHandler} style={{ padding: '8px 16px' }}>Add</button>
    </div>
  );
};

// Component to display the list of todos
const TodoList = ({ todos, deleteTodo, markTodo }) => {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} markTodo={markTodo} />
        ))
      ) : (
        <p>No tasks available. Add a new task to get started!</p>
      )}
    </div>
  );
};

// Component to display individual todo items with completion toggle and delete button
const Todo = ({ todo, deleteTodo, markTodo }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => markTodo(todo.id)}
        style={{ marginRight: '10px' }}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : '', flex: 1 }}>
        {todo.text}
      </span>
      <span
        onClick={() => deleteTodo(todo.id)}
        style={{ color: 'red', cursor: 'pointer', marginLeft: '10px' }}
      >
        <FaTrash />
      </span>
    </div>
  );
};

export default TodoApp;
