// **Problem:**  Take the name from user input and display the appropriate message when clicked on "show welcome message"

// If the name is an odd number of characters display ***"Hello [name]"*** and if it's even then display ***"Hi [name]"***

import React, { useState } from "react";

const DisplayName = () => {
  const [name, setName] = useState({
    isEven: null,
    name: "",
  });
  const inputChangeHandler = (e) => {
    const { value } = e.target;
    value.length % 2 === 0
      ? setName({ isEven: true, name: value })
      : setName({ isEven: false, name: value });
  };
  return (
    <div>
      <h1>Display Name</h1>
      <label htmlFor="">
        Enter Name
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => inputChangeHandler(e)}
        />
      </label>
      {name.name.length >= 1 &&
        (name.isEven === true ? (
          <h1>Hi {name.name}</h1>
        ) : (
          <h1>Hello {name.name}</h1>
        ))}
    </div>
  );
};

export default DisplayName;
