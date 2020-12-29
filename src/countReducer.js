export const initialValue = 0;

export const COUNT_INCREMENTED = {
  type: "COUNT_INCREMENTED",
};

const reduce = (currentState, action) => {
  switch (action.type) {
    case COUNT_INCREMENTED.type:
      return ++currentState;
    default:
      throw new Error();
  }
};

export default reduce;
