import { render, screen } from "@testing-library/react";
import buildTransaction from "./buildTransaction";
import TransactionList from "./TransactionList";
import TransactionsProvider from "./TransactionsProvider";

describe("TransactionList", () => {
  test("renders the transactions that are passed to it", async () => {
    const transactions = [
      buildTransaction({ payee: "T-Mobile" }),
      buildTransaction({ payee: "Gas Company" }),
    ];
    render(
      <TransactionsProvider value={transactions}>
        <TransactionList transactions={transactions} />
      </TransactionsProvider>
    );

    transactions.forEach((transaction) => {
      expect(screen.getByText(transaction.payee)).toBeInTheDocument();
    });
  });
});
