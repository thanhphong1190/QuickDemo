export const TOGGLE_CREATE_ACCOUNT = '[ACCOUNT] TOGGLE_CREATE_ACCOUNT';
export const CREATE_ACCOUNT_REQUESTING = '[ACCOUNT] CREATE_ACCOUNT_REQUESTING';
export const CREATE_ACCOUNT_SUCCESS = '[ACCOUNT] CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILED = '[ACCOUNT] CREATE_ACCOUNT_FAILED';

export const toggleCreateAccountPopup = isOpenCreateAccount => {
    return {
      type: TOGGLE_CREATE_ACCOUNT,
      payload: {
        isOpenCreateAccount
      }
    };
  };

export const createAccount = createAccountInfo => {
    return {
        type: CREATE_ACCOUNT_REQUESTING,
        payload: {
            createAccountInfo
        }
    };
};

export const createAccountSuccess = createAccountInfo => {
    return {
        type: CREATE_ACCOUNT_SUCCESS,
        payload: {
            createAccountInfo
        }
    };
};

export const createAccountFailed = error => {
    return {
        type: CREATE_ACCOUNT_FAILED,
        payload: {
            error
        }
    };
};
