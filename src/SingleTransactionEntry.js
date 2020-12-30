import { useState, useContext } from "react";
import { dispatchTransactionsContext } from "./TransactionsProvider";
import { transactionAdded } from "./transactionsReducer";
import useValueDifference from "./useValueDifference";

const SingleTransactionEntry = () => {
  console.log("SingleTransactionEntry");

  const [payee, setPayee] = useState("");
  useValueDifference({ payee });

  const dispatchTransactions = useContext(dispatchTransactionsContext);
  useValueDifference({ dispatchTransactions });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatchTransactions(transactionAdded(payee));
      }}
    >
      <label htmlFor="payee">Payee</label>
      <input
        id="payee"
        type="text"
        value={payee}
        onChange={(event) => setPayee(event.target.value)}
      />
      <button>Add Transaction</button>
    </form>
  );
};
export default SingleTransactionEntry;
