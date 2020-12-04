import React, { Component } from "react";
import "./App.css";
import FormInfo from "./component/FormInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employee: [],
      name: "",
      surname: "",
      salary: "",
    };
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const { name, surname, salary, employee } = this.state;
    let data = {
      name: name,
      surname: surname,
      salary: parseFloat(salary),
    };
    this.setState({
      employee: [...employee, data],
      name: "",
      surname: "",
      salary: "",
    });
    employee.splice(0,0,data)
    localStorage.setItem("info", JSON.stringify(employee));
  }

  componentDidMount() {
    let newData = JSON.parse(localStorage.getItem("info"));
    if (localStorage.getItem('info')){
      this.setState({
        name: newData.name,
        surname: newData.surname,
        salary: newData.salary
      })
    } else {
      this.setState({
        name: '',
        surname: '',
        salary: '',
      });
  }
  }
  render() {
    console.log("data", this.state.employee);
    const { name, surname, salary } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Employee Job Detail</h1>
          <p>Your info will be shared with third parties</p>
        </header>
        <FormInfo
          name={name}
          surname={surname}
          salary={salary}
          onChange={(e) => this.onChange(e)}
          onSubmit={(e) => this.onSubmit(e)}
        />
      </div>
    );
  }
}

export default App;
