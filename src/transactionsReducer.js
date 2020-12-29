import buildTransaction from "./buildTransaction";

const transactionAddedType = "TRANSACTION_ADDED";
export const transactionAdded = (payload) => ({
  type: transactionAddedType,
  payload,
});

export const initialValue = [];

const transactionsReducer = (oldTransactions, action) => {
  switch (action.type) {
    case transactionAddedType:
      const newTransaction = buildTransaction({ payee: action.payload });
      return [...oldTransactions, newTransaction];
    default:
      throw new Error();
  }
};

export default transactionsReducer;
