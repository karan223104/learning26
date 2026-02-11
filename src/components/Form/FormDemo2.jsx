import React from "react";
import { Form } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const FormDemo2 = () => {
  const { register, handleSubmit } = useForm();
  const [userData, setuserData] = useState({});
  const [isSubmited, setisSubmited] = useState(false);
  const submitHandler = (data) => {
    console.log(data);
    setuserData(data);
    setisSubmited(true);
  };
  return (
    <div class="form-group">
      <h1>FormDemo2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Firstname:</label><br></br>
          <input type="text" required {...register("firstName") }></input>
        </div>
        <div>
          <label>Lastname:</label><br></br>
          <input type="text" required {...register("lastName")}></input>
        </div><br></br>
        <div>
          <label >Gender:</label> 
           Male:<input type="radio" value="male" required {...register("gender")}></input>
           Female:<input type="radio" value="female" required {...register("gender")}></input>
        </div>
        <div required>
          <label>Hobbies:</label>
          Cricket <input type="checkbox" value="cricket"  {...register("hobbies")}></input>
          Travel <input type="checkbox" value="travel"  {...register("hobbies")}></input>
          Singing <input type="checkbox" value="singing"  {...register("hobbies")}></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
      {
        isSubmited == true &&<div><h1>Output</h1>
      <h2>Firstname:{userData.firstName}</h2>
      <h2>Lastname:{userData.lastName}</h2>
      <h2>Gender:{userData.gender}</h2>
      <h2>Hobbies:{userData.hobbies}</h2></div>
      }
    </div>
  );
};
