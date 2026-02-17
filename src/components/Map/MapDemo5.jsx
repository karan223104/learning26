import React from "react";

export const MapDemo5 = () => {
  var students = [
    { id: 1, name: "asd", age: 12, city: "ert", gender: "male" },
    { id: 2, name: "wee", age: 16, city: "rdw", gender: "female" },
    { id: 3, name: "fff", age: 15, city: "bte", gender: "female" },
    { id: 4, name: "nng", age: 14, city: "edr", gender: "male" },
    { id: 5, name: "dfg", age: 13, city: "hgf", gender: "female" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MapDemo5</h1>
      <table border="1" align="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>CITY</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr>
                <td> {student.id} </td>
                <td> {student.name} </td>
                <td style={{color:student.age<15 ? "orange" : "black"}}> {student.age} </td>
                <td> {student.city} </td>
                <td style={{backgroundColor:student.gender == "male" && "green"}}> {student.gender} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
