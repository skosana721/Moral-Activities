import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("Wongani");
  useEffect(() => {
    let interval;
    if (timer > 0 && isActive) {
      interval = setInterval(() => {
        setTimer((preState) => {
          return preState - 1;
        });
      }, 1000);
    } else if (timer === 0) {
      setTimer(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, timer]);
  const reset = () => {
    setTimer(60)
    setIsActive(false)
 }
  return (
    <div className="App">
      <header className="App-header">timer</header>
      <section className='container'>
        <div className='btn'>
          <button onClick={() => setIsActive(!isActive)}>Start</button>
          <button onClick={reset}>Reset</button>
        </div>
      <div className='value'>
        <h1>{timer !== 0 ? timer : name}</h1>
      </div>
      </section>
    </div>
  );
}

export default App;
