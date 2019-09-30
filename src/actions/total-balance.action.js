export const ADD_BALANCE = '[BALANCE] ADD_BALANCE';
export const DECREASE_BALANCE = '[BALANCE] DECREASE_BALANCE';

export const addToTotalBalance = addAmount => {
  return {
      type: ADD_BALANCE,
      payload: {
        addAmount
      }
  };
};

export const decreaseTotalBalance = decreaseAmount => {
  return {
      type: DECREASE_BALANCE,
      payload: {
        decreaseAmount
      }
  };
};
