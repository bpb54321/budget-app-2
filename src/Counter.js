import { COUNT_INCREMENTED } from "./countReducer";
import useCount from "./useCount";

const Counter = () => {
  const [count, dispatchCount] = useCount();
  return (
    <>
      <h2>Counter</h2>
      <p data-testid="count">{count}</p>
      <button onClick={() => dispatchCount(COUNT_INCREMENTED)}>
        Increment
      </button>
    </>
  );
};

Counter.whyDidYouRender = true;
export default Counter;
