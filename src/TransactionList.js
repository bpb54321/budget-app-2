import { useContext } from "react";
import TransactionListFooter from "./TransactionListFooter";
import { transactionsContext } from "./TransactionsProvider";
import useValueDifference from "./useValueDifference";

const TransactionList = () => {
  console.log("TransactionList");

  const transactions = useContext(transactionsContext);
  useValueDifference({ transactions });

  return (
    <>
      <ul>
        {transactions.map(({ payee, id }) => (
          <li key={id}>{payee}</li>
        ))}
      </ul>
      <TransactionListFooter />
    </>
  );
};

export default TransactionList;
