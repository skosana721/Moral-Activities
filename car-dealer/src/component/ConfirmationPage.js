import React from "react";
import ConfirmationForm from "./ConfirmationForm";
import SelectedCar from "./SelectedCar";

export default function ConfirmationPage() {
  return (
    <div className="confirm-page">
      <h2>Confirm Purchase</h2>
      <SelectedCar />
      <ConfirmationForm />
    </div>
  );
}
