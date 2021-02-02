import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { saveInfo } from "../redux/form/action";

function Form() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    ID: "",
    age: "",
    place: "",
    allergy: "",
  });
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveInfo(formInfo))
    console.log("info", formInfo);
  };

  const { name, surname, ID, age, place, allergy } = formInfo;
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-control">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            onChange={handleChange}
            value={name}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="surname"
            id=""
            placeholder="surname"
            onChange={handleChange}
            value={surname}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            name="ID"
            id=""
            placeholder="ID Number"
            onChange={handleChange}
            value={ID}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            name="age"
            id=""
            placeholder="Age"
            onChange={handleChange}
            value={age}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="place"
            id=""
            placeholder="Place"
            onChange={handleChange}
            value={place}
            required
          />
        </div>
        <div className="form-control">
          <textarea
            name="allergy"
            id=""
            cols="25"
            rows="10"
            placeholder="Allergy"
            onChange={handleChange}
            value={allergy}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
