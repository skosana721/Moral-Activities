import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ConfirmationPage from "./component/ConfirmationPage";
import RegisterForm from "./component/RegisterForm";
import ViewCar from "./component/ViewCar";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={RegisterForm} />
          <Route path="/viewCar" component={ViewCar} />
          <Route path="/confirmationPage/:id" children={<ConfirmationPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
