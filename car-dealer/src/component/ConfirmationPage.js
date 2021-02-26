import React from "react";
import ConfirmationForm from "./ConfirmationForm";
import SelectedCar from "./SelectedCar";

export default function ConfirmationPage() {
  return (
    <div>
      <h2>Confirmation Purchase</h2>
      <SelectedCar />
      <ConfirmationForm />
    </div>
  );
}
