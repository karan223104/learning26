import React from "react";

export const MapDemo8 = () => {
  var students =[
        {id:1, name:"ratan", marks:34, age:12, city:"ahemdabad", gender:"female", image:"/1.png"},
        {id:2, name:"karan", marks:32, age:13, city:"bhavnagar", gender:"male", image:"/2.png"},
        {id:3, name:"satish", marks:44, age:34, city:"surat", gender:"male", image:"/3.png"},
        {id:4, name:"rahul", marks:98, age:23, city:"surendranagar", gender:"male", image:"/4.png"},
        {id:5, name:"choksi", marks:74, age:52, city:"botad", gender:"female", image:"/5.png"},
        {id:6, name:"pratika", marks:67, age:78, city:"dwarka", gender:"female", image:"/6.png"},
        {id:7, name:"tevatiya", marks:24, age:45, city:"somnath", gender:"male", image:"/7.png"}

    ]
  return (
    <div>
      <h1>MapDemo8</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>MARKS</th>
            <th>AGE</th>
            <th>CITY</th>
            <th>GENDER</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.marks}</td>
                <td>{student.age}</td>
                <td>{student.city}</td>
                <td>{student.gender}</td>
                <td>
                    <img src={student.image} alt="student image" height='40px' width='40px'/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
