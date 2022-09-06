import React, { useState } from "react";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [capitalise, setCapitalise] = useState(true);
  const [clearFinished, setclearFinished] = useState(false);
  const [deleteTodo, setDeleteTodo] = useState(false);

  const fetchTodos = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(data);
      setTodos((todos) => [...todos, ...data]);
      console.log(todos);
    } catch (error) {
      console.log(error);
    }
  };

  const capitaliseTodos = (todos) => {
    return capitalise ? todos.toLowerCase() : todos.toUpperCase();
  };

  const clearFinishedFilter = (todos) => {
    return todos
      .filter((todo) => !todo.completed)
      .map((todo) => (
        <div>
          {todo.title}
          <button>{todo.completed ? "comeplete" : "unfinished"}</button>
        </div>
      ));
  };

  const deleteTask = (todos) => {
    return todos.filter((todo) => todo.id !== todos.id);
  };
  return (
    <div>
      <h1>Todos</h1>
      <button onClick={() => setCapitalise(!capitalise)}>Capiltalise</button>
      <button>Rearrange</button>
      <button onClick={() => setclearFinished(!clearFinished)}>Clear</button>

      <button onClick={() => fetchTodos()}>Load Todos</button>
      <ul>
        {clearFinished
          ? clearFinishedFilter(todos)
          : todos.map((element) => {
              return (
                <li key={element.id}>
                  <button>
                    {element.completed ? "comeplete" : "unfinished"}
                  </button>
                  {capitaliseTodos(element.title)}
                  <button onClick={() => deleteTask()}>x</button>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default Todos;
