import incrementCount from "./incrementCount";
import useCount from "./useCount";

const Counter = () => {
  const [count, setCount] = useCount();
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
