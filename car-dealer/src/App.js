import React from "react";
import "./App.css";
import RegisterForm from "./component/RegisterForm";
import ViewCar from "./component/ViewCar";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <RegisterForm />
      <ViewCar />
    </div>
  );
}

export default App;
