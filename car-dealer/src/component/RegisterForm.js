import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { closeModel, saveRegisterData } from "../redux/registerForm/actions";
import Model from "./Model";

function RegisterForm() {
  const [registerForm, setRegisterForm] = useState({
    brand: "",
    model: "",
    period: "",
    price: "",
    contact: "",
    location: "",
    image: "",
  });
  const isModelOpen = useSelector((state) => state.register.isModelOpen);
  useEffect(() => {
    setTimeout(() => {
      dispatch(closeModel());
    }, 3000);
  }, [isModelOpen]);
  const dispatch = useDispatch();
  const {
    brand,
    model,
    period,
    price,
    contact,
    location,
    image,
  } = registerForm;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const imageHandler = (e) => {
    let selectedImg = e.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setRegisterForm({ ...registerForm, image: reader.result });
      }
    };
    reader.readAsDataURL(selectedImg);
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
      image,
    };
    if ((brand, model, price, contact, location, image)) {
      dispatch(saveRegisterData(newData));

      setRegisterForm({
        brand: "",
        model: "",
        period: "",
        price: "",
        contact: "",
        location: "",
        image: "",
      });
    }
  };

  return (
    <div>
      <div className="form-title">
        <h2> Sell Your Car</h2>
      </div>
      {isModelOpen && <Model />}

      <form onSubmit={handleSave} className="register-form">
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
        <input
          type="file"
          id="file"
          name="image"
          onChange={imageHandler}
          className="input-file"
          accept="image/png, image/jpeg, image/jpg"
          required
        />

        <label htmlFor="file">Upload image</label>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
