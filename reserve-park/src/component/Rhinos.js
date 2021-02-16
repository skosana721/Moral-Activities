import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementMaleRhinos } from "../redux/rhino/actions";

function Rhinos() {
  const rhino = useSelector((state) => state.rhino);
  const dispatch = useDispatch();
  const decrementMaleNumber = () => {
    if (rhino.maleRhinos > 0) {
      dispatch(decrementMaleRhinos());
    }
  };
  return (
    <div>
      <h2>Rhinos</h2>
      <h3>Male Rhinos: {rhino.maleRhinos}</h3>
      <button onClick={decrementMaleNumber}>dead</button>
      <h3>Female Rhinos: {rhino.femaleRhinos}</h3>
      <p>Total Number Of Rhinos reserver: {rhino.totalRhinos}</p>
    </div>
  );
}

export default Rhinos;
