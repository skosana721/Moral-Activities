import React, { useState } from "react";
import "./App.css";
import Form from "./component/Form";

function App () {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    result: "",
  });
  const [data, setData] = useState([]);
  const [total, setTotal] = useState({ positiveNo: null, negativeNo: null , totalResult: null}); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formInfo]);

  
  };
  const testedPositive = (data) => {
    let number = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].result === "positive") {
        number++;
      }
    }
    setTotal({ ...total, positiveNo: number });
    console.log("positive", total.positiveNo);
    return number;
  };
  const testedNegative = (data) => {
    let number = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].result === "negative") {
        number++;
      }
    }
    setTotal({ ...total, negativeNo: number });

    return number;
  };
  
  const totalTest = () => {
    let results = testedPositive(data) + testedNegative(data);
    setTotal({...total, totalResult: results})

    console.log(results)
  }
  const { negativeNo, positiveNo , totalResult} = total;
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
      <h2>List</h2>
    
      {data !== null
        ? data.map((person, index) => {
            const { name, surname, result } = person;
            return (
              <div key={index} className="item">
                <h4>
                  {name} {surname} {result}
                </h4>
              </div>
            );
          })
          : null}
      <button onClick={() => testedPositive(data)} className="btn">
        Positive
      </button>
      {positiveNo === null ? null : positiveNo}
      <button onClick={() => testedNegative(data)} className="btn">
        Negative
      </button>
      {negativeNo === null ? null : negativeNo}
      <button onClick={() => totalTest()} className='btn'>Total</button>
      {totalResult === null? null: totalResult}
    </div>
  );
}

export default App;
