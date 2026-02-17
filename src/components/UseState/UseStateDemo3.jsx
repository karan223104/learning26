import React from "react";
import { useState } from "react";

export const UseStateDemo3 = () => {
  const [users, setUsers] = useState(["karan", "aman"]);

  const addUser = () => {
    setUsers([...users, "royal"]);
  };

  return (
    <div>
      <h1>UseStateDemo3</h1>
      {users.map((u) => {
        return <li>{u}</li>;
      })}
    <button onClick={addUser}>+</button>
    </div>
  );
};
