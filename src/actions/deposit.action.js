export const DEPOSIT_REQUESTING = '[DEPOSIT] DEPOSIT_REQUESTING';
export const DEPOSIT_SUCCESS = '[DEPOSIT] DEPOSIT_SUCCESS';
export const DEPOSIT_FAILED = '[DEPOSIT] DEPOSIT_FAILED';

export const requestDeposit = requestDeposit => {
    return {
        type: DEPOSIT_REQUESTING,
        payload: {
          requestDeposit
        }
    };
};

export const depositSuccess = depositData => {
    return {
        type: DEPOSIT_SUCCESS,
        payload: {
          depositData
        }
    };
};

export const depositFailed = error => {
    return {
        type: DEPOSIT_FAILED,
        payload: {
            error
        }
    };
};
