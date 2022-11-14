import React, { useState } from "react";

const VanillaTodoFilter = () => {
  const todos = [
    {
      id: 1,
      title: "NeoG assignments",
      completed: false,
    },
    {
      id: 2,
      title: "Pair programming session",
      completed: true,
    },
    {
      id: 3,
      title: "Project submission",
      completed: false,
    },
    {
      id: 4,
      title: "Coding practice",
      completed: true,
    },
  ];

  const [todosState, setTodosState] = useState(todos);

  const showAllTodos = () => {
    setTodosState(todos);
  };

  const showCompletedTodos = () => {
    const completedTodos = todos.filter((todo) => todo.completed === true);
    setTodosState(completedTodos);
  };
  const showInCompletedTodos = () => {
    const incompletedTodos = todos.filter((todo) => todo.completed === false);
    setTodosState(incompletedTodos);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <button onClick={showAllTodos}>Show all Todos</button>
        <button onClick={showCompletedTodos}>Show Completed Todos</button>
        <button onClick={showInCompletedTodos}>Show Incomplete Todos</button>
      </div>
      <ul>
        {todosState.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default VanillaTodoFilter;
