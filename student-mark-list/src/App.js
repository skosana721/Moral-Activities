import React, { Component } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      mark: "",
      data: [],
      newAverage: null,
      bestAchiever: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, mark, data } = this.state;
    const info = {
      name: name,
      mark: mark,
    };
    this.setState({
      name: "",
      mark: "",
    });
    this.state.data.splice(0, 0, info);

    localStorage.setItem("storedData", JSON.stringify(data));
    
    
  }
  componentWillMount() {
    let storedData = JSON.parse(localStorage.getItem("storedData"));
    if (localStorage.getItem("storedData")) {
      this.setState({
        name: storedData.name,
        mark: storedData.mark,
      });
    } else {
      this.setState({
        name: "",
        mark: "",
      });
    }
    
  }
  topAchiever = (student) => {
    const { data } = this.state;
    let topStudent = { mark: 0 };
    for (let i = 0; i < data.length; i++) {
      if (topStudent.mark < student[i].mark) {
        topStudent = student[i];
      }
      this.setState({
        bestAchiever: topStudent,
      });

      return topStudent
    }
  };
  studentAverage = (student) => {
         const {data}= this.state
        let total = 0;
    
        for (let i = 0; i < data.length; i++) {
          total += parseFloat(student[i].mark);
        }
        let numberOFStudents = student.length * 100;
        let average = Math.round((total / numberOFStudents) * 100);
        this.setState({
          newAverage: average,
        });
        return average;
      };

  render() {
    
    const { name, mark, data, newAverage, bestAchiever } = this.state;
    const list =
      data.length === 0
        ? ""
        : data.map((student, id) => {
            return (
              <ul key={id}>
                <li>
                  {student.name} {student.mark}
                </li>
              </ul>
            );
          });
    const classAverage = newAverage !== null ? <div>{newAverage}</div> : null;
    const student = bestAchiever !== null ? <div>
      {bestAchiever.name}
      {bestAchiever.mark}
      
    </div> : null;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Student Performs</h2>
        </div>
        <StudentForm
          name={name}
          mark={mark}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        
        <br />
        <div>
          <label>I'm the list: </label>

          {list}
          <br />
          <button onClick={() => this.studentAverage(data)}>Average</button>
          <br />
          {classAverage}
          <br />
          <button onClick={() => this.topAchiever(data)}>Top Student</button>
          <br />
          {student}
        </div>
      </div>
    );
  }
}

export default App;
