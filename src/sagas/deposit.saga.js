import { put, takeLatest } from "redux-saga/effects";
import { DEPOSIT_REQUESTING, depositSuccess, depositFailed } from "../actions/deposit.action";
import { addToTotalBalance } from "../actions/total-balance.action";
import { addTransactionToHistory } from "../actions/transaction-history.action";
import moment from "moment";
import AppConfig from "../config";

function* requestDeposit(action) {
    try {
        const { requestDeposit } = action.payload;
        const logData = {
            name: "Deposit",
            amount: parseFloat(requestDeposit.amount),
            time: moment().format(AppConfig.dateTimeDisplayFormat)
        }
        yield put(depositSuccess(requestDeposit));
        yield put(addToTotalBalance(requestDeposit.amount));
        yield put(addTransactionToHistory(logData));
    } catch (e) {
        yield put(depositFailed(e));
    }
}

export function* watchDepositSagasAsync() {
    yield takeLatest(DEPOSIT_REQUESTING, requestDeposit);
}
