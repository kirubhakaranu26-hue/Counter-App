import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Counter App</h1>

        <div className="counter">{count}</div>

        {count === 0 && (
          <p className="warning">Minimum limit reached</p>
        )}

        <div className="btn-group">
          <button className="btn increment" onClick={handleIncrement}>
            + Increment
          </button>

          <button
            className="btn decrement"
            onClick={handleDecrement}
            disabled={count === 0}
          >
            - Decrement
          </button>

          <button className="btn reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
