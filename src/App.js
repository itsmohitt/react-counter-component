import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [counterValue, setCounterValue] = useState(0);
  const [intervalRef, setIntervalRef] = useState(null);
  const startCounter = () => {
    const intervalCounter = setInterval(function () {
      setCounterValue((prevState) => prevState + 1);
    }, 1000);
    setIntervalRef(intervalCounter);
  };
  const pauseCounter = () => {
    clearInterval(intervalRef);
    setIntervalRef(null);
  };
  const resetCounter = () => {
    clearInterval(intervalRef);
    setIntervalRef(null);
    setCounterValue(0);
  };
  return (
    <div className="App">
      <h1>Counter: {counterValue}</h1>
      <button
        onClick={intervalRef ? pauseCounter : startCounter}
        style={{ margin: 8 }}
      >
        {intervalRef ? "Pause" : "Start"}
      </button>
      {counterValue ? (
        <button onClick={resetCounter} style={{ margin: 8 }}>
          Reset
        </button>
      ) : null}
    </div>
  );
}
