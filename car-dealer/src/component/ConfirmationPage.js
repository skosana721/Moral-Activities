import React from "react";
import { useSelector } from "react-redux";
import ConfirmationForm from "./ConfirmationForm";
import SelectedCar from "./SelectedCar";

export default function ConfirmationPage() {
  const car = useSelector((state) => state.view.viewCars);
  return (
    <div className="confirm-page">
      {car.length !== 0 ? (
        <div>
          <h2>Confirm Purchase</h2>
          <SelectedCar />
          <ConfirmationForm />
        </div>
      ) : (
        <div>
          <h3>Your purchase is being processed...</h3>
        </div>
      )}
    </div>
  );
}
