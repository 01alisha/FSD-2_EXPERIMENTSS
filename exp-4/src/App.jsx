import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, fetchData } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(fetchData())}>
        Async Increment
      </button>
    </div>
  );
}

export default App;