import React, { useState } from "react";
import "./App.css";
import Form from "./component/Form";
// import { v4 as uuidv4 } from "uuid";

function App() {
  const [formInfo, setFormInfo] = useState({
    
    name: "",
    surname: "",
    result: "",
  });
  const [patientInfo, setPatientInfo] = useState([]);
  const [recoveryStatus, setRecoveryStatus] = useState(null);
  const [deadPatients, setDeadPatients] = useState(null);
  const [recoveredPatients, setRecoveredPatients] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    const { name, surname, result} = formInfo;
    e.preventDefault();
    if (name && surname && result) {
      const newPatient = { ...formInfo, name, surname, result };
      setPatientInfo([...patientInfo, newPatient]);
      
    }
  };
  const setUpdates = () => {
    
    let filtered = patientInfo.filter((person,index) => person[index] !== index)
    
    if (recoveryStatus && patientInfo !== null) {
      setRecoveredPatients(patientInfo)
      setPatientInfo( filtered)
    } else {
      
      setDeadPatients(patientInfo);
      setPatientInfo( filtered);
    }
    
  };
  const recovered = () => {
    setRecoveryStatus(true);
  
  };
  const died = () => {
    setRecoveryStatus(false);
  
  };
  const filteredPatients = () =>
    patientInfo
      .filter((patient) => patient.result === "positive")
      .map((person,index) => {
        const { name, surname } = person;
        return (
          <div key={index} className="item">
            <h3>
              {name} {surname}
            </h3>
            <input
              type="radio"
              name="status"
              id="die"
              value="die"
              onClick={died}
            />
            <label htmlFor="die">Dead</label>
            <input
              type="radio"
              name="status"
              id="recovered"
              value="recovered"
              onClick={recovered}
            />
            <label htmlFor="recovered">Recovered</label>
            <button onClick={setUpdates}>Update</button>
          </div>
        );
      });

  console.log("recovery", recoveryStatus);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Covid-19 Test</h1>
      </header>
      <Form
        info={formInfo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h1>Patients List</h1>

      <section className="test-container">
        <div>
          <h2>Positive Patients</h2>
          {filteredPatients()}
        </div>
        <div>
          <h2>Negative Patients</h2>
          {patientInfo
            .filter((patient) => patient.result === "negative")
            .map((person,index) => {
              const { name, surname } = person;

              return (
                <div key={index} className="item">
                  <h3>
                    {name} {surname}
                  </h3>
                </div>
              );
            })}
        </div>
        <div>
          <h1>Dead Patients</h1>
          {deadPatients !== null
            ? deadPatients.map((patient, index) => (
                <div key={index} className="item">
                  <h3>
                    {patient.name} {patient.surname}
                  </h3>
                </div>
              ))
            : null}
        </div>
        <div>
          <h1>Recovered Patients</h1>
          {recoveredPatients !== null
            ? recoveredPatients.map((patient, index) => {
                return (
                  <div key={index} className="item">
                    <h3>
                      {patient.name} {patient.surname}
                    </h3>
                  </div>
                );
              })
            : null}
        </div>
      </section>
      {console.log(patientInfo)}
    </div>
  );
}

export default App;
