import { createContext, useReducer } from "react";
import transactionsReducer, { initialValue } from "./transactionsReducer";
import useValueDifference from "./useValueDifference";

export const transactionsContext = createContext(undefined);
export const dispatchTransactionsContext = createContext(undefined);

const TransactionsProvider = ({ value = initialValue, children }) => {
  console.log("TransactionsProvider");
  useValueDifference(value, "value");
  useValueDifference(children, "children");

  const [transactions, dispatchTransactions] = useReducer(
    transactionsReducer,
    value
  );
  useValueDifference(transactions, "transactions");
  return (
    <transactionsContext.Provider value={transactions}>
      <dispatchTransactionsContext.Provider value={dispatchTransactions}>
        {children}
      </dispatchTransactionsContext.Provider>
    </transactionsContext.Provider>
  );
};

export default TransactionsProvider;
