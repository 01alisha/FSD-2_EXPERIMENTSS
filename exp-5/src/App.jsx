import { useState, useMemo, useCallback } from "react";
import HeavyComponent from "./components/HeavyComponent";
import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./pages/About"));
function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  // Expensive calculation
  const squared = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h3>Square: {squared}</h3>
      <button onClick={() => setNum(num + 1)}>Change Number</button>

      <button onClick={handleClick}>Click Me</button>

      <HeavyComponent value={count} />
      <Suspense fallback={<h3>Loading...</h3>}>
  <About />
</Suspense>
<img
  src="https://picsum.photos/300"
  alt="demo"
  loading="lazy"
/>
    </div>
  );
}

export default App;