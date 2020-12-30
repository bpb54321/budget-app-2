import { createContext, useReducer } from "react";
import reduce, { initialValue } from "./countReducer";
import useValueDifference from "./useValueDifference";

export const countContext = createContext(undefined);
export const dispatchCountContext = createContext(undefined);

const CountProvider = ({ children }) => {
  console.log("CountProvider");
  useValueDifference({ children });

  const [count, dispatchCount] = useReducer(reduce, initialValue);
  useValueDifference({ count });

  return (
    <countContext.Provider value={count}>
      <dispatchCountContext.Provider value={dispatchCount}>
        {children}
      </dispatchCountContext.Provider>
    </countContext.Provider>
  );
};

export default CountProvider;
