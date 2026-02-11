import React from "react"; 
import { useForm } from "react-hook-form";
import { useState } from "react";

export const FormDemo1 = () => {
  const { register, handleSubmit } = useForm();
  const [userData, setuserData] = useState({});
  const [isSubmited, setisSubmited] = useState(false);
  const submitHandler = (data) => {
    console.log(data);
    setuserData(data);
    setisSubmited(true);
  };
  return (
    <div>
      <h1>FormDemo1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("firstName")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
          <label>GENDER</label> <br></br>
          MALE:<input type="radio" value="male" {...register("gender")}></input>
          FEMALE:
          <input type="radio" value="female" {...register("gender")}></input>
        </div>
        <div>
          <label>HOBBIES</label> <br></br>
          CRICKET :
          <input
            type="checkbox"
            value="cricket"
            {...register("hobbies")}
          ></input>
          TRAVEL :
          <input
            type="checkbox"
            value="travel"
            {...register("hobbies")}
          ></input>
          SCCROLLING :
          <input
            type="checkbox"
            value="scrolling"
            {...register("hobbies")}
          ></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
      {
        isSubmited == true &&<div><h1>Output</h1>
      <h2>name:{userData.firstName}</h2>
      <h2>age:{userData.age}</h2></div>
      }
    </div>
  );
};
