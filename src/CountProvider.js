import { createContext, useReducer } from "react";
import reduce, { initialValue } from "./countReducer";

export const countContext = createContext(undefined);
export const dispatchCountContext = createContext(undefined);

const CountProvider = ({ children }) => {
  const [count, dispatchCount] = useReducer(reduce, initialValue);
  return (
    <countContext.Provider value={count}>
      <dispatchCountContext.Provider value={dispatchCount}>
        {children}
      </dispatchCountContext.Provider>
    </countContext.Provider>
  );
};

CountProvider.whyDidYouRender = true;
export default CountProvider;
