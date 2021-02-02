import React from "react";

function Form() {
  return (
    <div>
      <form>
        <input type="text" name="name" id="" placeholder="name" />
        <input type="text" name="surname" id="" placeholder="surname" />
        <input type="number" name="ID" id="" placeholder="ID Number" />
        <input type="number" name="age" id="" placeholder="Age" />
        <input type="text" name="place" id="" placeholder="Place" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="allergy"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
