import React from "react";

export const MapDemo1 = () => {
  let cars = ["asd", "wer", "weh", "oiu", "mkd"];

  return (
    <div>
      <h1>MapDemo1</h1>
      {cars.map((c) => {
        return <h1>{c}</h1>;
      })}
    </div>
  );
};
