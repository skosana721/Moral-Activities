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
    const { name, surname, ID, age, place, allergy } = formInfo;
    return (
        <div>
      <form>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Name"
          onChange={handleChange}
          value={name}
          />
        <input
          type="text"
          name="Surname"
          id=""
          placeholder="surname"
          onChange={handleChange}
          value={surname}
          />
        <input
          type="number"
          name="ID"
          id=""
          placeholder="ID Number"
          onChange={handleChange}
          value={ID}
          />
        <input
          type="number"
          name="age"
          id=""
          placeholder="Age"
          onChange={handleChange}
          value={age}
          />
        <input
          type="text"
          name="place"
          id=""
          placeholder="Place"
          onChange={handleChange}
          value={place}
          />
        <textarea
          name="allergy"
          id=""
          cols="25"
          rows="10"
          placeholder="Allergy"
          onChange={handleChange}
          value={allergy}
          ></textarea>
        <button type="submit">Submit</button>
            </form>
            {console.log('info', formInfo.name)}
    </div>
  );
}

export default Form;
