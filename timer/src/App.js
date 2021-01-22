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
      <section>
        <div>
          <button onClick={() => setIsActive(!isActive)}>Start</button>
          <button onClick={reset}>Reset</button>
        </div>
      </section>

      {timer !== 0 ? timer : name}
    </div>
  );
}

export default App;
