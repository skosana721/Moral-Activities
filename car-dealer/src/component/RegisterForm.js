import React, { useState } from "react";

function RegisterForm() {
  const [registerForm, setRegisterForm] = useState({
    brand: "",
    model: "",
    price: "",
    contact: "",
    location: "",
  });
  const { brand, model, price, contact, location, image } = registerForm;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
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
        />
        <input
          type="text"
          onChange={handleChange}
          name="model"
          placeholder="Enter car model (e.g Polo)"
          value={model}
        />
        <input type="number" onChange={handleChange} name="" placeholder="" />
        <input
          type="number"
          onChange={handleChange}
          name="price"
          placeholder="Price"
          value={price}
        />
        <input
          type="number"
          onChange={handleChange}
          name="contact"
          placeholder="Contact Details"
          value={contact}
        />
        <input
          type="text"
          onChange={handleChange}
          name="location"
          placeholder="Enter Location"
          value={location}
        />

        <button type="submit">Submit</button>
      </form>
      <h2>{registerForm.image}</h2>
    </div>
  );
}

export default RegisterForm;
