import { put, takeLatest } from "redux-saga/effects";
import { CREATE_ACCOUNT_REQUESTING, createAccountSuccess, createAccountFailed, toggleCreateAccountPopup } from "../actions/account.action";

function* requestCreateAccount(action) {
    try {
        const { createAccountInfo } = action.payload;
        yield put(createAccountSuccess(createAccountInfo));
        yield put(toggleCreateAccountPopup(false));
    } catch (e) {
        yield put(createAccountFailed(e));
    }
}

export function* watchCreateAccountSagasAsync() {
    yield takeLatest(CREATE_ACCOUNT_REQUESTING, requestCreateAccount);
}
