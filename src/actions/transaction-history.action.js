export const ADD_TRANSACTION_HISTORY = '[TRANSACTION_HISTORY] ADD_TRANSACTION_HISTORY';
export const SORT_TRANSACTION_HISTORY = '[TRANSACTION_HISTORY] SORT_TRANSACTION_HISTORY';
export const SEARCH_TRANSACTION_HISTORY = '[TRANSACTION_HISTORY] SEARCH_TRANSACTION_HISTORY';

export const addTransactionToHistory = addTransactionInfo => {
    return {
        type: ADD_TRANSACTION_HISTORY,
        payload: {
            addTransactionInfo
        }
    };
}

export const sortTransactionHistory = sortData => {
  return {
      type: SORT_TRANSACTION_HISTORY,
      payload: {
        sortData
      }
  };
}

export const searchTransactionHistory = query => {
  return {
      type: SEARCH_TRANSACTION_HISTORY,
      payload: {
        query
      }
  };
}
