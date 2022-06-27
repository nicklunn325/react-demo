import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  function logCount() {
    console.log(`The count is: ${count}`);
  }

  useEffect(logCount, [count]);

  return (
    <div>
      <h1>COUNTER: {count}</h1>
      <button onClick={increment}>UP</button>
      <button>DOWN</button>
    </div>
  );
};

export default Counter;
