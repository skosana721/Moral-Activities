import React from "react";

function Form(props) {
  const { name, surname, handleChange, handleSubmit } = props;

  return (
    <div className='form-control'>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        required/>
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={surname}
          onChange={handleChange}
        required/>
        <input
          type="radio"
          name="result"
          id="positive"
          onChange={handleChange}
          value='positive'        
        required/>
        <label htmlFor="positive">Positive</label>
        <input
          type="radio"
          name="result"
          id="negative"
          onChange={handleChange}
          value='negative'        
        required/>
        <label htmlFor="negative">Negative</label>
       <input type="submit"/>
      </form>
    </div>
  );
}
export default Form;
