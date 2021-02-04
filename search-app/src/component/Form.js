import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveInfo } from "../redux/form/actions";
import { modalOpen } from "../redux/Modal/actions";

function Form() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    id: "",
    age: "",
    place: "",
    allergy: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveInfo(formInfo));
    dispatch(modalOpen());
    setFormInfo({
      name: "",
      surname: "",
      id: "",
      age: "",
      place: "",
      allergy: "",
    });
  };

  const { name, surname, id, age, place, allergy } = formInfo;
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-control">
          <input
            type="text"
            name="name"
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
            placeholder="surname"
            onChange={handleChange}
            value={surname}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            name="id"
            placeholder="ID Number"
            onChange={handleChange}
            value={id}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            name="age"
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
            placeholder="Place"
            onChange={handleChange}
            value={place}
            required
          />
        </div>
        <div className="form-control">
          <textarea
            name="allergy"
            cols="15"
            rows="10"
            placeholder="Food allergy's"
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
