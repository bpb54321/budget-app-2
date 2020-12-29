import { createContext, useReducer } from "react";
import transactionsReducer, { initialValue } from "./transactionsReducer";

export const transactionsContext = createContext(undefined);
export const dispatchTransactionsContext = createContext(undefined);

const TransactionsProvider = ({ value = initialValue, children }) => {
  const [transactions, dispatchTransactions] = useReducer(
    transactionsReducer,
    value
  );
  return (
    <transactionsContext.Provider value={transactions}>
      <dispatchTransactionsContext.Provider value={dispatchTransactions}>
        {children}
      </dispatchTransactionsContext.Provider>
    </transactionsContext.Provider>
  );
};
TransactionsProvider.whyDidYouRender = true;
export default TransactionsProvider;
