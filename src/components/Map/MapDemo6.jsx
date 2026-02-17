import React from 'react'

export const MapDemo6 = () => {

    var students = [
    { id: 1, name: "asd",mark:23, age: 12, city: "ert", gender: "male" },
    { id: 2, name: "wee",mark:54, age: 16, city: "rdw", gender: "female" },
    { id: 3, name: "fff",mark:87, age: 15, city: "bte", gender: "female" },
    { id: 4, name: "nng",mark:45, age: 14, city: "edr", gender: "male" },
    { id: 5, name: "dfg",mark:56, age: 13, city: "hgf", gender: "female" },
  ];

  return (
    <div>
        <h1>MapDemo6</h1>
        <table class="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>MARK</th>
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
                <td> {student.mark}</td>
                <td> {student.age}</td>
                <td> {student.city} </td>
                <td> {student.gender} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
