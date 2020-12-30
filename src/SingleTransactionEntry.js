import { useState, useContext } from "react";
import { dispatchTransactionsContext } from "./TransactionsProvider";
import { transactionAdded } from "./transactionsReducer";

const SingleTransactionEntry = () => {
  const [payee, setPayee] = useState("");
  const dispatchTransactions = useContext(dispatchTransactionsContext);
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
SingleTransactionEntry.whyDidYouRender = true;
export default SingleTransactionEntry;
