import React from "react";
import { useSelector } from "react-redux";
export default function ConfirmationPage() {
  const info = useSelector((state) => state.view.viewCars);
  console.log(info);
  return (
    <div>
      {info.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.brand}</h2>
          </div>
        );
      })}
      <h2>Confirmation</h2>
    </div>
  );
}
