import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "reactstrap";
import { selectedCar } from "../redux/viewCar/actions";
import { Link } from "react-router-dom";

function ViewCar() {
  const [searchList, setSearchList] = useState("");
  const cars = useSelector((state) => state.register.registerForm);
  const dispatch = useDispatch();
  const selectCar = (id) => {
    let filteredList = cars.find((car) => car.id === id);
    dispatch(selectedCar(filteredList));
  };
  const searchResults = cars.filter((car) => {
    return (
      car.brand.toLowerCase().includes(searchList.toLowerCase()) ||
      car.price.includes(searchList)
    );
  });

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearchList(e.target.value)}
        placeholder="Search car brand / price"
      />
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
        {searchResults.map((car) => {
          return (
            <tbody key={car.id}>
              <tr>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.period}</td>
                <td>R {car.price}</td>
                <td>{car.contact}</td>
                <th>{car.location}</th>
                <td>
                  <Link to={`/confirmationPage/${car.id}`}>
                    <Button onClick={() => selectCar(car.id)}>
                      Interested
                    </Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default ViewCar;
