import React from "react";
import { CardComponent } from "./CardComponent";

export const FunctionDemo = () => {
  const test = () => {
    alert("test function called...");
  };

  const test1 = (x) => {
    alert("value of x" + x);
  };
  return (
    <div>
      <h1>FunctionDemo</h1>
      <button onClick={test}>click</button>
      <button
        onClick={() => {
          test1(100);
        }}
      >
        click1
      </button>
      <CardComponent
        title="FUN DEMO "
        description="FUN DEMO component"
      ></CardComponent>
    </div>
  );
};
