import React, { useState } from "react";
import { useSelector } from "react-redux";

function Students() {
  const form = useSelector((state) => state.form.formInfo);
  const [searchName, setSearchName] = useState("");
  const [edit, setEdit] = useState(false);
  const [newValue, setNewValue] = useState("");
  const filteredName = form.filter((person) => {
    return person.name.toUpperCase().includes(searchName.toUpperCase());
  });
  const editMode = () => {
    setEdit(!edit);
    let selectedItem = form.find((person) => {
      console.log(person.id);
    });
    console.log(selectedItem);

    console.log("edit mode activated");
  };
  const updatedValue = () => {
    setEdit(false);

    console.log("newValue", newValue);
  };
  const renderEditView = () => {
    return (
      <div>
        <input
          type="text"
          name="place"
          onChange={(e) => setNewValue(e.target.value)}
          value={form.place}
        />
        <button onClick={editMode}>X</button>
        <button onClick={updatedValue}>Ok</button>
      </div>
    );
  };
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
        return (
          <div key={id} className="student">
            <h3>{name}</h3>
            <h3>{surname}</h3>
            <h4>{id}</h4>
            <h4>{age}</h4>
            {edit ? (
              renderEditView()
            ) : (
              <h3 onDoubleClick={editMode}>{place}</h3>
            )}
            <h3>{allergy}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Students;
