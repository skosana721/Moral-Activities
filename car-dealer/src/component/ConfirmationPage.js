import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useParams } from "react-router-dom";

export default function ConfirmationPage() {
  const [car, setCar] = useState("");
  const info = useSelector((state) => state.view.viewCars);
  const { id } = useParams();
  useEffect(() => {
    const newCar = info.find((car) => car.id === id);
    setCar(newCar);
  }, []);

  return (
    <div>
      <h2>Confirmation Purchase</h2>

      <Card
        body
        color="info"
        style={{
          color: "white",
          margin: "0 35% ",
        }}
      >
        <CardBody>
          <CardTitle tag="h3">{car.brand}</CardTitle>
          <CardSubtitle tag="h5">{car.model}</CardSubtitle>
          <CardText>Ownship: {car.period} year</CardText>
        </CardBody>
        <CardBody>
          <CardText tag="h6">R {car.price}</CardText>
          <CardText tag="h6">{car.contact}</CardText>
          <CardText tag="h6">{car.location}</CardText>
        </CardBody>
      </Card>

      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" name="" />
      </form>
    </div>
  );
}
