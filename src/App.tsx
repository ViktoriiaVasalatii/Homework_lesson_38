import React from 'react';
import { TodoProvider } from './contexts/TodoContext';

import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo App</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
