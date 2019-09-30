import { put, takeLatest } from "redux-saga/effects";
import { WITHDRAW_REQUESTING, withdrawSuccess, withdrawFailed } from "../actions/withdraw.action";
import { decreaseTotalBalance } from "../actions/total-balance.action";
import { addTransactionToHistory } from "../actions/transaction-history.action";
import moment from "moment";
import AppConfig from "../config";

function* requestWithdraw(action) {
    try {
        const { requestWithdraw } = action.payload;
        const logData = {
            name: "Withdraw",
            amount: requestWithdraw.withdrawAmount,
            time: moment().format(AppConfig.dateTimeDisplayFormat)
        }
        yield put(withdrawSuccess(requestWithdraw));
        yield put(decreaseTotalBalance(requestWithdraw.withdrawAmount));
        yield put(addTransactionToHistory(logData));
    } catch (e) {
        yield put(withdrawFailed(e));
    }
}

export function* watchWithdrawSagasAsync() {
    yield takeLatest(WITHDRAW_REQUESTING, requestWithdraw);
}
