import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? "completed" : ""}>
            {todo.title}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
