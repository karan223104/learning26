import React from "react";

export const MapDemo2 = () => {
  var users = [
    { id: 1, name: "lkj", age: 12, city: "ahmd" },
    { id: 2, name: "jkf", age: 32, city: "ccmd" },
    { id: 1, name: "lkj", age: 14, city: "ffmd" },
  ];
  return (
    <div>
      <h1>MapDemo2</h1>
      {users.map((user) => {
        return (
          <h1>
            {user.id} - {user.name} - {user.age} - {user.city}
          </h1>
        );
      })}
    </div>
  );
};
