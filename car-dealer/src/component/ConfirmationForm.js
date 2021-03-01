import React, { useState } from "react";
import { Button } from "reactstrap";
function ConfirmationForm() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    lastName: "",
    contact: "",
    location: "",
    payment: "",
  });
  const { name, lastName, contact, location, payment } = formInfo;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = { ...formInfo, name, lastName, contact, payment, location };
    if ((name, lastName, contact, location, payment)) {
      setFormInfo(newForm);
      setFormInfo({
        name: "",
        lastName: "",
        contact: "",
        location: "",
        payment: "",
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="contact"
          id=""
          placeholder="Enter contact details"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          onChange={handleChange}
          required
        />
        <br />
        <select name="payment" onChange={handleChange} required>
          <option value="">Select payment</option>
          <option value="cash">Cash</option>
          <option value="credit">Credit</option>
        </select>
        <br />
        <Button color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ConfirmationForm;
