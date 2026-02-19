import React from "react";
import { useState } from "react";
export const Input = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [mob, setMob] = useState("");
  const [gender, setGender] = useState("");
  const [rollNo, setRollno] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Input</h1>
      <div>NAME<input type="text" onChange={(e) => setName(e.target.value)} />{name}</div>
      <div>AGE<input type="text" onChange={(e) => setAge(e.target.value)} /></div>
      <div>DOB<input type="text" onChange={(e) => setDob(e.target.value)} /></div>
      <div>OB<input type="text" onChange={(e) => setMob(e.target.value)} /></div>
      <div>GENDER<input type="text" onChange={(e) => setGender(e.target.value)} /></div>
      <div>ROLLNO<input type="text" onChange={(e) => setRollno(e.target.value)} /></div>
      <div>USERNAME<input type="text" onChange={(e) => setUsername(e.target.value)} /></div>
      <div>EMAIL<input type="text" onChange={(e) => setEmail(e.target.value)} /></div>
      <div>PASSWORD<input type="text" onChange={(e) => setPassword(e.target.value)} /></div>
    </div>
  );
};
