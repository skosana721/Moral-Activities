import React, { useState } from "react";
import { useSelector } from "react-redux";

function Students() {
  const form = useSelector((state) => state.form.formInfo);
  const [searchName, setSearchName] = useState("");
  const filteredName = form.filter((person) => {
    return person.name.toUpperCase().includes(searchName.toUpperCase());
  });

  return (
    <div className="students">
      <input
        type="text"
        name="search"
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="Search for name"
        value={searchName}
      />

      {filteredName.map((student) => {
        const { name, surname, place, age, allergy, id } = student;

        const CapitalizedName = name[0].toUpperCase() + name.slice(1);
        return (
          <div key={id} className="student">
            <h3>{name}</h3>
            <h3>{surname}</h3>
            <h4>{id}</h4>
            <h4>{age}</h4>
            <h3>{place}</h3>
            <h3>{allergy}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Students;
