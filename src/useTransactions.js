import { useContext } from "react";
import {
  dispatchTransactionsContext,
  transactionsContext,
} from "./TransactionsProvider";

const useTransactions = () => {
  const transactions = useContext(transactionsContext);
  const dispatchTransactions = useContext(dispatchTransactionsContext);

  return [transactions, dispatchTransactions];
};

export default useTransactions;
