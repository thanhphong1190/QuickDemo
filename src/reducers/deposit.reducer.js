import {
  DEPOSIT_REQUESTING,
  DEPOSIT_SUCCESS,
  DEPOSIT_FAILED
} from '../actions/deposit.action';

const initState = {
    requesting: false,
    succeed: false,
    error: '',
    deposit: null
};

export function depositReducer(state = initState, action) {
    switch (action.type) {
        case DEPOSIT_REQUESTING:
            return Object.assign({}, state, {
                requesting: true,
                succeed: false,
                error: '',
            });
        case DEPOSIT_SUCCESS:
            return Object.assign({}, state, {
                requesting: false,
                succeed: true,
                error: '',
                deposit: action.payload.depositData
            });
        case DEPOSIT_FAILED:
            return Object.assign({}, state, {
                requesting: false,
                succeed: false,
                error: action.payload.error
            });
        default:
            return state;
    }
}
