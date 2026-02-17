import React from "react";

export const MapDemo4 = () => {
  var cities = [
    { id: 1, name: "asd", pop: 111111, city: "ahmd" },
    { id: 2, name: "hnd", pop: 144447, city: "err" },
    { id: 3, name: "rtd", pop: 115555, city: "rtt" },
    { id: 4, name: "rtd", pop: 144444, city: "fff" },
    { id: 5, name: "dsd", pop: 543544, city: "eee" },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MapDemo4</h1>
      <table border="1" align="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CITY</th>
            <th>POPULATION</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => {
            return (
              <tr>
                <td>{city.id}</td>
                <td>{city.name}</td>
                <td>{city.pop}</td>
                <td>{city.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
