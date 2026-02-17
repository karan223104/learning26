import React from "react";
import { SubEmployeeList } from "./SubEmployeeList";

export const Employeelist = (props) => {
  console.log("emplist ", props);

  return (
    <div>
      <h1>Employeelist</h1>
      <h2>{props.title}</h2>
      <h3>{props.company.name}</h3>
      <h3>{props.company.year}</h3>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {props.employee.map((emp) => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <SubEmployeeList title={props.title}></SubEmployeeList>
    </div>
  );
};
