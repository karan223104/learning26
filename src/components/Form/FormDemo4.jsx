import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const FormDemo4 = () => {
  const {register,handleSubmit,formState: { errors }} = useForm({mode:"all"});
  const [userData, setuserData] = useState({});
  const [isSubmited, setisSubmited] = useState(false);

  console.log("errors..", errors);

  const submitHandler = (data) => {
    console.log(data);
    setuserData(data);
    setisSubmited(true);
  };

  const validators = {
    nameValidator: {
      required: {
        value: true,
        message: "please enter the name",
      },
      minLength: {
        value: 3,
        message: "minimum 3 charachter requierd",
      },
      maxLength: {
        value: 10,
        message: "maximum 10 charachter requierd",
      },
    },
    bloodgroupValidator: {
      validate: (value) =>
      value.length > 0 || "Select at least one state"
    },
    stateValidator: {
      validate: (value) =>
      value.length > 0 || "Select at least one state"
    },
    cityValidator: {
      validate: (value) =>
      value.length > 0 || "Select at least one state"
    },
    mobileValidator: {
      required: {
        value: true,
        message: "Please enter mobile number",
      },
      pattern: {
        value: /^[6-9]{1}[0-9]{9}$/,
        message: "Mobile number must be 10 digits",
      },
    },
    emailValidator: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email address",
      },
    },
    passwordValidator: {
      required: {
        value: true,
        message: "Password is required",
      },
      minLength: {
        value: 3,
        message: "minimum 3 charachter requierd",
      },
      maxLength: {
        value: 10,
        message: "maximum 10 charachter requierd",
      },
    },
    timeValidator: {
      validate: (value) =>
      value.length > 0 || "Select at least one state"
    },
  };
  return (
    <div >

      <h1>FormDemo4</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <label>Full Name:</label>
        <input type="text" {...register("fullName", validators.nameValidator)}></input>
        {errors.fullName && errors.fullName.message}<br></br>

        <label>Bloodgroup:</label>
        <select defaultValue=""{...register("bloodGroup", validators.bloodgroupValidator)}>
          <option value=""disabled>--Please choose an option--</option>
          <option>o+</option>
          <option>b-</option>
          <option>a+</option>
          <option>o-</option>
        </select>
        {errors.bloodGroup?.message}<br></br>

        <label>State:</label>
        <select defaultValue="" {...register("state", validators.stateValidator)}>
          <option value="" disabled>--Please choose an option--</option>
          <option>gujarat</option>
          <option>goa</option>
          <option>UP</option>
          <option>MP</option>
        </select>
        {errors.state?.message}<br></br>

        <label>Mobile NO:</label>
        <input type="text" {...register("mobileNum", validators.mobileValidator)}></input>
        {errors.mobileNum?.message}<br></br>

        <label>Email:</label>
        <input type="text" {...register("email", validators.emailValidator)}></input>
        {errors.email?.message}<br></br>

        <label>Password:</label>
        <input type="text" {...register("password", validators.passwordValidator)}></input>
        {errors.password?.message}<br></br>

        <label>Last time blood donated:</label>
        <select defaultValue="" {...register("time", validators.timeValidator)}>
          <option value="" disabled>--Please choose an option--</option>
          <option>3 month completed</option>
          <option>not donated </option>
        </select>
        {errors.time?.message}<br></br>

        <input type="submit"></input>

        {isSubmited == true && (
          <div>
            <h4>Full Name:{userData.fullName}</h4>
            <h4>Bloodgroup:{userData.bloodGroup}</h4>
            <h4>State:{userData.state}</h4>
            <h4>Mobile NO:{userData.mobileNum}</h4>
            <h4>Email:{userData.email}</h4>
            <h4>Password:{userData.password}</h4>
            <h4>Last time blood donated:{userData.time}</h4>
          </div>
        )}

      </form>

    </div>
  );
};
