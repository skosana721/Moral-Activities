import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("Wongani");
  useEffect(() => {
    
    let interval;
    if (  isActive) {
      if (timer > 0) {
        interval = setInterval(() => {
          setTimer((preState) => {
            return preState - 1;
          });
        }, 1000);
        
      }
    } 

    return () => {
      clearInterval(interval);
    };
  }, [isActive, timer]);
  const reset = () => {
    setTimer(60);
    setIsActive(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Timer</h1>
        <p>A simple countdown timer</p>
      </header>
      <section className="container">
        <div className="btn">
          <button onClick={() => setIsActive(!isActive)}>Start</button>
          <button onClick={reset}>Reset</button>
        </div>
        <div className="value">
          {timer !== 0 ? <h2>{timer} </h2> : <h1>{name}</h1>}
        </div>
      </section>
    </div>
  );
}

export default App;
