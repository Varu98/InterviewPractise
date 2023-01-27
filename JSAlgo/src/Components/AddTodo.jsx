import React, { useState } from "react";

const AddTodo = () => {
  const [listOfTodos, setListOfTodos] = useState([
    {
      title: "Interview Practise",
      isCompleted: false,
    },
  ]);
  const [newTodo, setNewTodo] = useState({ title: "", isCompleted: false });

  const inputHandler = (e) => {
    const { value } = e.target;
    setNewTodo((prev) => ({ ...prev, title: value }));
    console.log(newTodo);
  };

  const submitNewTodo = (e) => {
    e.preventDefault();
    setListOfTodos((prev) => [...prev, newTodo]);
    console.log(listOfTodos);
  };

  const setToggle = (e, todo) => {
    console.log(todo);
    setListOfTodos((prev) => [...prev, (todo.isCompleted = !todo.isCompleted)]);
  };
  return (
    <div>
      <h1>Add Todos</h1>
      <input
        type="text"
        onChange={(e) => {
          inputHandler(e);
        }}
      />
      <button
        onClick={(e) => {
          submitNewTodo(e);
          console.log(listOfTodos);
        }}
      >
        Add
      </button>
      <div>
        {listOfTodos.map((todo) => (
          <div>
            <hr />
            <div>Title: {todo.title}</div>
            <div>
              completed{" "}
              <button onClick={(e) => setToggle(e, todo)}>
                {todo.isCompleted === true ? "✅" : "⚔️"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTodo;
