import { createContext, useState } from "react";

export const countContext = createContext(undefined);
export const setCountContext = createContext(undefined);

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <countContext.Provider value={count}>
      <setCountContext.Provider value={setCount}>
        {children}
      </setCountContext.Provider>
    </countContext.Provider>
  );
};

CountProvider.whyDidYouRender = true;
export default CountProvider;
