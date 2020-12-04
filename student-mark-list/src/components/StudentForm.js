import React, { Component } from "react";

class StudentForm extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const { name, mark, handleChange, handleSubmit } = this.props;
    
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label name="studentName">Student Name</label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            name="name"
            required
          />
          <label name="studentMark">Student Marks</label>
          <input
            type="number"
            value={mark}
            onChange={handleChange}
            placeholder="Enter marks"
            name="mark"
            required
          />
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default StudentForm;
