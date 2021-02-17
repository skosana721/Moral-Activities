import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementFemaleRhinos,
  decrementMaleRhinos,
  getRhinoTotal,
} from "../redux/rhino/actions";
import rhinoImg from "../img/pexels-jo-kassis-5461808.jpg";

function Rhinos() {
  const rhino = useSelector((state) => state.rhino);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRhinoTotal());
  }, [dispatch]);
  const decrementMaleNumber = () => {
    if (rhino.maleRhinos > 0) {
      dispatch(decrementMaleRhinos());
    }
  };
  const decrementFemaleNumber = () => {
    if (rhino.femaleRhinos > 0) {
      dispatch(decrementFemaleRhinos());
    }
  };
  return (
    <div className="rhino-section">
      <h2>Rhinos</h2>
      <img src={rhinoImg} alt="" />
      <div className="male">
        <h3>Male Rhinos: {rhino.maleRhinos}</h3>
        <button onClick={decrementMaleNumber}>dead</button>
      </div>
      <div className="female">
        <h3>Female Rhinos: {rhino.femaleRhinos}</h3>
        <button onClick={decrementFemaleNumber}>dead</button>
      </div>
      <p>Total Number Of Rhinos reserver: {rhino.totalRhinos}</p>
    </div>
  );
}

export default Rhinos;
