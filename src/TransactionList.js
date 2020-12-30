import { transactionsContext } from "./TransactionsProvider";
import { useContext, useRef, useEffect } from "react";

function useValueDifference(newValue, valueName) {
  // useRef uses newValue as its initial value the first time it runs in a component
  const oldValueRef = useRef(newValue);

  useEffect(() => {
    const oldValue = oldValueRef.current;
    console.log(`"${valueName}" changed from`);
    console.log(oldValue);
    console.log("to");
    console.log(newValue);
    oldValueRef.current = newValue;
  }, [newValue, valueName]);
}

const TransactionList = () => {
  console.log("TransactionList");

  const transactions = useContext(transactionsContext);
  useValueDifference(transactions, "transactions");

  return (
    <ul>
      {transactions.map(({ payee, id }) => (
        <li key={id}>{payee}</li>
      ))}
    </ul>
  );
};

export default TransactionList;
