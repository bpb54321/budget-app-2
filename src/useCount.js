import { useContext } from "react";
import { countContext, setCountContext } from "./CountProvider";

const useCount = () => {
  const count = useContext(countContext);
  const setCount = useContext(setCountContext);

  return [count, setCount];
};

export default useCount;
