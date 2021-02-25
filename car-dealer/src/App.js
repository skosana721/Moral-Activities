import React from "react";
import "./App.css";
import ConfirmationPage from "./component/ConfirmationPage";
import RegisterForm from "./component/RegisterForm";
import ViewCar from "./component/ViewCar";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <RegisterForm />
      <ViewCar />
      <ConfirmationPage />
    </div>
  );
}

export default App;
