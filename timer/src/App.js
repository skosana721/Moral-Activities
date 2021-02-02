import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "./component/form";
import { useDispatch, useSelector } from "react-redux";
import { updateState, startTimer } from "./Redux/actions";

function App() {
  const [timer, setTimer] = useState("");
  const dispatch = useDispatch();
  const { count, isActive, name } = useSelector((state) => state);
  useEffect(() => {
    let interval;
    if (isActive) {
      if (count > 0) {
        interval = setImmediate(() => count - 1, 1000);
      }
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, count, dispatch]);

  const handleChange = (e) => {
    setTimer(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (timer) {
      dispatch(updateState(parseFloat(timer)));
      setTimer("");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Timer</h1>
        <p>A simple countdown timer</p>
      </header>
      <Form
        timer={timer}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <section className="container">
        <div className="btn">
          <button onClick={() => dispatch(startTimer())}>Start</button>
        </div>
        <div className="value">
          {count === 0 ? <h1>{name} </h1> : <h2>{count}</h2>}
        </div>
      </section>
    </div>
  );
}

export default App;
