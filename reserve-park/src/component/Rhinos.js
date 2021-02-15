import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Rhinos() {
  const rhino = useSelector((state) => state.rhino);
  return (
    <div>
      <h2>Rhinos</h2>
      <h3>Male Rhinos: {rhino.maleRhinos}</h3>
      <h3>Female Rhinos: {rhino.femaleRhinos}</h3>
    </div>
  );
}

export default Rhinos;
