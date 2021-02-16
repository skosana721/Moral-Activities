import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTotal, reduceMaleNumber } from "../redux/lion/actions";

function Lions() {
  const dispatch = useDispatch();
  const lion = useSelector((state) => state.lion);
  useEffect(() => {
    dispatch(getTotal());
  }, [lion.maleLions, dispatch]);
  const reduceMaleNum = () => {
    if (lion.maleLions > 0) {
      dispatch(reduceMaleNumber());
    }
  };
  return (
    <div>
      <h2>Lions</h2>
      <h3>Male Lions: {lion.maleLions}</h3>
      <button onClick={reduceMaleNum}>-</button>
      <h3>Female Lions: {lion.femaleLions}</h3>
      <p>Total Number of Lion in reserver: {lion.totalLions}</p>
    </div>
  );
}

export default Lions;
