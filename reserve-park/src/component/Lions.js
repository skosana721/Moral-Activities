import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTotal,
  reduceFemaleNumber,
  reduceMaleNumber,
} from "../redux/lion/actions";
import Img from "../img/pexels-tina-nord-797582.jpg";
function Lions() {
  const dispatch = useDispatch();
  const lion = useSelector((state) => state.lion);
  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch]);
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
  return (
    <div className="lion-section">
      <h2>Lions</h2>
      <img src={Img} alt="" />
      <form>
        <input
          type="number"
          name="male"
          placeholder="Enter the Number of male Lions"
        />
      </form>

      <div className="male">
        <h3>Male Lions: {lion.maleLions}</h3>
        <button onClick={reduceMaleNum}>dead</button>
      </div>
      <form>
        <input
          type="number"
          name="female"
          placeholder="Enter the number of female Lions"
        />
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
