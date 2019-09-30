import {
    TOGGLE_CREATE_ACCOUNT,
    CREATE_ACCOUNT_REQUESTING,
    CREATE_ACCOUNT_SUCCESS,
    CREATE_ACCOUNT_FAILED
} from '../actions/account.action';

const initState = {
    requesting: false,
    succeed: false,
    error: '',
    account: null
};

const initToggleCreateAccount = {
    isOpenCreateAccount: false
};

export function toggleCreateAccountReducer(
    state = initToggleCreateAccount,
    action
) {
    switch (action.type) {
        case TOGGLE_CREATE_ACCOUNT:
            return Object.assign({}, state, {
                isOpenCreateAccount: action.payload.isOpenCreateAccount
            });
        default:
            return state;
    }
}

export function createAccountReducer(state = initState, action) {
    switch (action.type) {
        case CREATE_ACCOUNT_REQUESTING:
            return Object.assign({}, state, {
                requesting: true,
                succeed: false,
                error: '',
            });
        case CREATE_ACCOUNT_SUCCESS:
            return Object.assign({}, state, {
                requesting: false,
                succeed: true,
                error: '',
                account: action.payload.createAccountInfo
            });
        case CREATE_ACCOUNT_FAILED:
            return Object.assign({}, state, {
                requesting: false,
                succeed: false,
                error: action.payload.error
            });
        default:
            return state;
    }
}
