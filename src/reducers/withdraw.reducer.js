import {
    WITHDRAW_REQUESTING,
    WITHDRAW_SUCCESS,
    WITHDRAW_FAILED
  } from '../actions/withdraw.action';
  
  const initState = {
      requesting: false,
      succeed: false,
      error: '',
      withdraw: null
  };
  
  export function withdrawReducer(state = initState, action) {
      switch (action.type) {
          case WITHDRAW_REQUESTING:
              return Object.assign({}, state, {
                  requesting: true,
                  succeed: false,
                  error: '',
              });
          case WITHDRAW_SUCCESS:
              return Object.assign({}, state, {
                  requesting: false,
                  succeed: true,
                  error: '',
                  withdraw: action.payload.withdrawData
              });
          case WITHDRAW_FAILED:
              return Object.assign({}, state, {
                  requesting: false,
                  succeed: false,
                  error: action.payload.error
              });
          default:
              return state;
      }
  }
  