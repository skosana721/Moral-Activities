import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

function ViewCar() {
  const cars = useSelector((state) => state.register.registerForm);
  console.log(cars);
  return (
    <div>
      <Table dark>
        <thead>
          <tr>
            <th>Car Brand</th>
            <th>Car Model</th>
            <th>Year of ownship</th>
            <th>Price</th>
            <th>Contact Detail</th>
            <th>Location</th>
          </tr>
        </thead>
        {cars.map((car) => {
          return (
            <tbody key={car.id}>
              <tr>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.period}</td>
                <td>R {car.price}</td>
                <td>{car.contact}</td>
                <th>{car.location}</th>
                <td></td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default ViewCar;
