import React from "react";
import { Employeelist } from "./Employeelist";

export const Employee = () => {
  var title = "Employee is here";

  var company = {
    name: "karan",
    year: 2004,
  };

  var employees = [
    {id:1, name:"qwe", age:23},
    {id:2, name:"tre", age:24},
    {id:3, name:"qwe", age:25},
  ];
    
  

  return (
    <div>
      <h1>Employee</h1>
      <Employeelist title={title} company={company} employee={employees}></Employeelist>
    </div>
  );
};
