import {
    ADD_TRANSACTION_HISTORY,
    SORT_TRANSACTION_HISTORY,
    SEARCH_TRANSACTION_HISTORY
} from '../actions/transaction-history.action';
import _ from 'lodash';

const initState = {
    transactionHistory: []
};

function sortArray(arrayData, sortData) {
  return _.orderBy(arrayData, [sortData.name],[sortData.type]);
}

function searchArray(arrayData, query) {
  return arrayData.filter((item) => item.name.includes(query));
}

export function transactionHistoryReducer(state = initState, action) {
    switch (action.type) {
        case ADD_TRANSACTION_HISTORY:
            return Object.assign({}, state, {
                transactionHistory: state.transactionHistory.concat(action.payload.addTransactionInfo)
            });
        case SORT_TRANSACTION_HISTORY:
          return Object.assign({}, state, {
              transactionHistory: sortArray(state.transactionHistory, action.payload.sortData)
          });
        case SEARCH_TRANSACTION_HISTORY:
          return Object.assign({}, state, {
              transactionHistory: searchArray(state.transactionHistory, action.payload.query)
          });
        default:
            return state;
    }
}
