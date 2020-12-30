import { COUNT_INCREMENTED } from "./countReducer";
import useCount from "./useCount";
import useValueDifference from "./useValueDifference";

const Counter = () => {
  console.log("Counter");
  const [count, dispatchCount] = useCount();
  useValueDifference({ count });
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

export default Counter;
