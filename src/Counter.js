import { useContext } from "react";
import { countContext } from "./App";
import incrementCount from "./incrementCount";

const Counter = ({ setCount }) => {
  const count = useContext(countContext);
  return (
    <>
      <h2>Counter</h2>
      <p data-testid="count">{count}</p>
      <button onClick={() => incrementCount(setCount)}>Increment</button>
    </>
  );
};

Counter.whyDidYouRender = true;
export default Counter;
