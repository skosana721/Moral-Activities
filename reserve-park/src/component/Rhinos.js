import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementFemaleRhinos,
  decrementMaleRhinos,
  getRhinoTotal,
  saveFemaleRhinoTotal,
  saveFemaleTotal,
  saveMaleRhinoTotal,
  saveMaleTotal,
} from "../redux/rhino/actions";
import rhinoImg from "../img/pexels-jo-kassis-5461808.jpg";

function Rhinos() {
  const rhino = useSelector((state) => state.rhino);
  const dispatch = useDispatch();
  const [maleNumber, setMaleNumber] = useState(0);
  const [femaleNumber, setFemaleNumber] = useState(0);
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
  const addMaleNumber = (e) => {
    e.preventDefault(0);
    dispatch(saveMaleRhinoTotal(maleNumber));
  };
  const addFemaleNumber = (e) => {
    e.preventDefault();
    dispatch(saveFemaleRhinoTotal(femaleNumber));
  };
  return (
    <div className="rhino-section">
      <h2>Rhinos</h2>
      <img src={rhinoImg} alt="" />
      <form onSubmit={addMaleNumber}>
        <input
          type="number"
          name="male"
          placeholder="Enter the Number of male Rhinos"
          onChange={(e) => setMaleNumber(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="male">
        <h3>Male Rhinos: {rhino.maleRhinos}</h3>
        <button onClick={decrementMaleNumber}>dead</button>
      </div>
      <form onSubmit={addFemaleNumber}>
        <input
          type="number"
          name="female"
          placeholder="Enter the Number of female Rhinos"
          onChange={(e) => setFemaleNumber(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="female">
        <h3>Female Rhinos: {rhino.femaleRhinos}</h3>
        <button onClick={decrementFemaleNumber}>dead</button>
      </div>
      <p>Total Number Of Rhinos reserver: {rhino.totalRhinos}</p>
    </div>
  );
}

export default Rhinos;
