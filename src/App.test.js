import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

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
