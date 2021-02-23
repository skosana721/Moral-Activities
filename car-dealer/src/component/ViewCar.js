import React from "react";
import { useSelector } from "react-redux";

function ViewCar() {
  const cars = useSelector((state) => state.register.registerForm);
  console.log(cars);
  return (
    <div>
      {cars.map((car) => {
        return (
          <div key={car.id}>
            <h2>{car.brand}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default ViewCar;
