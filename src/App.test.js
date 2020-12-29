import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("increments count when user presses Increment button", async () => {
    render(<App />);

    let initialCount = 0;
    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent(initialCount.toString());

    const incrementButton = screen.getByText("Increment");
    userEvent.click(incrementButton);

    expect(countElement).toHaveTextContent((++initialCount).toString());
  });

  test("adds a new transaction to the transaction list when the user adds a new transaction", async () => {
    render(<App />);

    const payeeName = "Insurance Company";
    expect(screen.queryByText(payeeName)).not.toBeInTheDocument();

    const payeeInput = screen.getByLabelText("Payee");

    userEvent.type(payeeInput, payeeName);

    const addTransactionButton = screen.getByText("Add Transaction");
    userEvent.click(addTransactionButton);

    expect(screen.getByText(payeeName)).toBeInTheDocument();
  });
});
