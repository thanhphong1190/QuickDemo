export const WITHDRAW_REQUESTING = '[WITHDRAW] WITHDRAW_REQUESTING';
export const WITHDRAW_SUCCESS = '[WITHDRAW] WITHDRAW_SUCCESS';
export const WITHDRAW_FAILED = '[WITHDRAW] WITHDRAW_FAILED';

export const requestWithdraw = requestWithdraw => {
    return {
        type: WITHDRAW_REQUESTING,
        payload: {
          requestWithdraw
        }
    };
};

export const withdrawSuccess = withdrawData => {
    return {
        type: WITHDRAW_SUCCESS,
        payload: {
            withdrawData
        }
    };
};

export const withdrawFailed = error => {
    return {
        type: WITHDRAW_FAILED,
        payload: {
            error
        }
    };
};
