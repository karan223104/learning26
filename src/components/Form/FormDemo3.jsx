import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {
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
      <h1>FormDemo3</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label>Book Name:</label>
        <input type="text" required {...register("bookName")}></input>
        <br></br>
        <label>Book ID:</label>
        <input type="text" required {...register("bookID")}></input>
        <br></br>
        <label>Page:</label>
        <input type="text" required {...register("bookPage")}></input>
        <br></br>
        <label>Language:</label>
        <input type="text" required {...register("bookLanguage")}></input>
        <br></br>

        <label for="fruits">Choose a fruit:</label>
        <select id="fruits" required {...register("fruits")}>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="grape">Grape</option>
        </select>
        <br></br>
        <input type="submit"></input>
      </form>
      {isSubmited == true && (
        <div>
          <h5>Book Name:{userData.bookName}</h5>
          <h5>Book ID:{userData.bookID}</h5>
          <h5>Page:{userData.bookPage}</h5>
          <h5>Language:{userData.bookLanguage}</h5>
          <h5>Fruit:{userData.fruits}</h5>
        </div>
      )}
    </div>
  );
};
