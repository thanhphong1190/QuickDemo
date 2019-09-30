import { combineReducers } from 'redux';
import { toggleCreateAccountReducer, createAccountReducer } from './account.reducer';
import { depositReducer } from './deposit.reducer';
import { totalBalanceReducer } from './total-balance.reducer';
import { withdrawReducer } from './withdraw.reducer';
import { transactionHistoryReducer } from './transaction-history.reducer';

export default combineReducers({
  createAccount: createAccountReducer,
  toggleCreateAccount: toggleCreateAccountReducer,
  deposit: depositReducer,
  totalBalance: totalBalanceReducer,
  withdraw: withdrawReducer,
  transactionHistory: transactionHistoryReducer
});
