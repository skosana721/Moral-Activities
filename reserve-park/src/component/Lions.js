import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Lions() {
  const lion = useSelector((state) => state.lion);

  return (
    <div>
      <h2>Lions</h2>
      <h3>Male Lions: {lion.maleLions}</h3>
      <h3>Female Lions: {lion.femaleLions}</h3>
      <p>Total Number of Lion in reserver: {lion.totalLions}</p>
    </div>
  );
}

export default Lions;
