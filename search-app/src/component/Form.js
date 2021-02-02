import React, { useState } from "react";

function Form() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    ID: "",
    age: "",
    place: "",
    allergy: "",
  });
  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormInfo({...formInfo,
          [name]: value,
        });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("info", formInfo);
  }
  
    const { name, surname, ID, age, place, allergy } = formInfo;
    return (
        <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Name"
          onChange={handleChange}
            value={name}
            required
          />
        <input
          type="text"
          name="surname"
          id=""
          placeholder="surname"
          onChange={handleChange}
          value={surname}
          required/>
        <input
          type="number"
          name="ID"
          id=""
          placeholder="ID Number"
          onChange={handleChange}
          value={ID}
          required/>
        <input
          type="number"
          name="age"
          id=""
          placeholder="Age"
          onChange={handleChange}
          value={age}
          required/>
        <input
          type="text"
          name="place"
          id=""
          placeholder="Place"
          onChange={handleChange}
          value={place}
          required/>
        <textarea
          name="allergy"
          id=""
          cols="25"
          rows="10"
          placeholder="Allergy"
          onChange={handleChange}
          value={allergy}
          required></textarea>
        <button type="submit">Submit</button>
            </form>
            
    </div>
  );
}

export default Form;
