import {
  ADD_BALANCE,
  DECREASE_BALANCE
} from '../actions/total-balance.action';

const initState = {
  totalBalance: 0
};

export function totalBalanceReducer(state = initState, action) {
  switch (action.type) {
    case ADD_BALANCE:
      return Object.assign({}, state, {
        totalBalance: parseFloat(state.totalBalance + action.payload.addAmount)
      });
    case DECREASE_BALANCE:
      return Object.assign({}, state, {
        totalBalance: parseFloat(state.totalBalance - action.payload.decreaseAmount)
      });
    default:
      return state;
  }
}
