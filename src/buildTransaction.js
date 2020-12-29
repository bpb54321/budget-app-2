let lastId = 0;
export const buildTransaction = ({ payee = "", id = ++lastId } = {}) => {
  return {
    payee,
    id,
  };
};

export default buildTransaction;
