import React from "react";

function Form(props) {
    const { handleSubmit, timer, handleChange } = props;
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label htmlFor="time">Set Timer</label>
          <input
            type="number"
            min={0}
            max={60}
            onChange={handleChange}
            name='timer'
            id="timer"
            value={timer}
            required
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
