import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTotal,
  reduceFemaleNumber,
  reduceMaleNumber,
  saveFemaleTotal,
  saveMaleTotal,
} from "../redux/lion/actions";
import Img from "../img/pexels-tina-nord-797582.jpg";
function Lions() {
  const dispatch = useDispatch();
  const lion = useSelector((state) => state.lion);

  const [maleNumber, setMaleNumber] = useState(0);
  const [femaleNumber, setFemaleNumber] = useState(0);
  useEffect(() => {
    dispatch(getTotal());
  }, [lion.maleLions, lion.femaleLions, dispatch]);
  const reduceMaleNum = () => {
    if (lion.maleLions > 0) {
      dispatch(reduceMaleNumber());
    }
  };
  const reduceFemaleNum = () => {
    if (lion.femaleLions > 0) {
      dispatch(reduceFemaleNumber());
    }
  };
  const addMaleNumber = (e) => {
    e.preventDefault(0);
    dispatch(saveMaleTotal(maleNumber));
  };
  const addFemaleNumber = (e) => {
    e.preventDefault();
    dispatch(saveFemaleTotal(femaleNumber));
  };
  return (
    <div className="lion-section">
      <h2>Lions</h2>
      <img src={Img} alt="" />
      <form onSubmit={addMaleNumber}>
        <input
          type="number"
          name="male"
          onChange={(e) => setMaleNumber(e.target.value)}
          placeholder="Enter the Number of male Lions"
        />
        <button type="submit">Add</button>
      </form>
      <div className="male">
        <h3>Male Lions: {lion.maleLions}</h3>
        <button onClick={reduceMaleNum}>dead</button>
      </div>
      <form onSubmit={addFemaleNumber}>
        <input
          type="number"
          name="female"
          placeholder="Enter the number of female Lions"
          onChange={(e) => setFemaleNumber(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="female">
        <h3>Female Lions: {lion.femaleLions}</h3>
        <button onClick={reduceFemaleNum}>dead</button>
      </div>
      <p>Total Number of Lion in reserver: {lion.totalLions}</p>
    </div>
  );
}

export default Lions;
