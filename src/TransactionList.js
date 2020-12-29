import useTransactions from "./useTransactions";

const TransactionList = () => {
  const [transactions] = useTransactions();
  return (
    <ul>
      {transactions.map(({ payee, id }) => (
        <li key={id}>{payee}</li>
      ))}
    </ul>
  );
};
TransactionList.whyDidYouRender = true;
export default TransactionList;
