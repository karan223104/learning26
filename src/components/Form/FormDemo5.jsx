import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const FormDemo5 = () => {
  const {register,handleSubmit,formState: { errors },watch,} = useForm({ mode: "all" });
  const [userData, setuserData] = useState({});
  const [isSubmited, setisSubmited] = useState(false);

  const password = watch("password");
  console.log(password);

  console.log("errors..", errors);

  const submitHandler = (data) => {
    console.log(data);
    setuserData(data);
    setisSubmited(true);
  };

  const passwordRules = {
    minLength: password?.length >= 8,
    hasUpperCase: /[A-Z]/.test(password || ""),
    hasLowerCase: /[a-z]/.test(password || ""),
    hasNumber: /[0-9]/.test(password || ""),
    hasSpecialChar: /[@$!%*?&]/.test(password || ""),
  };

  const validators = {
    passwordValidator: {
      required: {
        value: true,
        message: "Confirm Password is required",
      },
    },
    confirmpasswordValidator: {
      required: {
        value: true,
        message: "Confirm Password is required",
      },
      validate: (params) => {
        return params == password || "confirm password not matched*";
      },
    },
  };
  return (
    <div>
      <h1>FormDemo5</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <label>Password:</label>
        <input
          type="text"
          {...register("password", validators.passwordValidator)}
        ></input>
        {errors.password?.message}
        <br></br>

        <label>Confirm Password:</label>
        <input
          type="text"
          {...register("confirmpassword", validators.confirmpasswordValidator)}
        ></input>
        {errors.confirmpassword?.message}
        <br></br>

        <ul>
          <li style={{ color: passwordRules.minLength ? "green" : "red" }}>
            Minimum 8 characters
          </li>

          <li style={{ color: passwordRules.hasUpperCase ? "green" : "red" }}>
            At least one uppercase letter
          </li>

          <li style={{ color: passwordRules.hasLowerCase ? "green" : "red" }}>
            At least one lowercase letter
          </li>

          <li style={{ color: passwordRules.hasNumber ? "green" : "red" }}>
            At least one number
          </li>

          <li style={{ color: passwordRules.hasSpecialChar ? "green" : "red" }}>
            At least one special character
          </li>
        </ul>
        <input type="submit"></input>

        {isSubmited == true && (
          alert("password is submited successfully...")
        )}
      </form>
    </div>
  );
};
