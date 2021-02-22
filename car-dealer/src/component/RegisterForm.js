import React from "react";

function RegisterForm() {
  return (
    <div>
      <form>
        <input
          type="text"
          name="brand"
          placeholder="Enter car brand (e.g VW)"
        />
        <input
          type="text"
          name="model"
          placeholder="Enter car model (e.g Polo)"
        />
        <input type="number" name="" placeholder="" />
        <input type="number" name="price" placeholder="Price" />
        <input type="number" name="contact" placeholder="Contact Details" />
        <input type="text" name="location" placeholder="Enter Location" />
        <input
          type="file"
          accept="image/gif, image/jpeg, image/png"
          name="image"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
