import { useContext } from "react";
import { countContext, dispatchCountContext } from "./CountProvider";

const useCount = () => {
  const count = useContext(countContext);
  const dispatchCount = useContext(dispatchCountContext);

  return [count, dispatchCount];
};

export default useCount;
