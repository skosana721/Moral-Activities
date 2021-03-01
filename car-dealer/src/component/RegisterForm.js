import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { saveRegisterData } from "../redux/registerForm/actions";

function RegisterForm() {
  const [registerForm, setRegisterForm] = useState({
    brand: "",
    model: "",
    period: "",
    price: "",
    contact: "",
    location: "",
  });
  const dispatch = useDispatch();
  const { brand, model, period, price, contact, location } = registerForm;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newData = {
      ...registerForm,
      id: uuidv4(),
      brand,
      model,
      period,
      price,
      contact,
      location,
    };
    if ((brand, model, price, contact, location)) {
      dispatch(saveRegisterData(newData));
      setRegisterForm({
        brand: "",
        model: "",
        period: "",
        price: "",
        contact: "",
        location: "",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <input
          type="text"
          onChange={handleChange}
          name="brand"
          placeholder="Enter car brand (e.g VW)"
          value={brand}
          required
        />
        <input
          type="text"
          onChange={handleChange}
          name="model"
          placeholder="Enter car model (e.g Polo)"
          value={model}
          required
        />
        <input
          type="number"
          onChange={handleChange}
          name="period"
          placeholder="Year of ownship"
          value={period}
          required
        />
        <input
          type="number"
          onChange={handleChange}
          name="price"
          placeholder="Price"
          value={price}
          required
        />
        <input
          type="number"
          onChange={handleChange}
          name="contact"
          placeholder="Contact Details"
          value={contact}
          required
        />
        <input
          type="text"
          onChange={handleChange}
          name="location"
          placeholder="Enter Location"
          value={location}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
