import React,{useState} from "react";

function Form () {
    const [formInfo, setFormInfo] = useState({
        name: '',
        surname: '',
        ID: '',
        age: '',
        place: '',
        allergy:''
    })
  return (
    <div>
      <form>
        <input type="text" name="name" id="" placeholder="Name" />
        <input type="text" name="Surname" id="" placeholder="surname" />
        <input type="number" name="ID" id="" placeholder="ID Number" />
        <input type="number" name="age" id="" placeholder="Age" />
        <input type="text" name="place" id="" placeholder="Place" />
        <textarea
          name=""
          id=""
          cols="25"
          rows="10"
          placeholder="Allergy"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
