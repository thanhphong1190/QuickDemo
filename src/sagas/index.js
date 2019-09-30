import { all, fork } from "redux-saga/effects";
import { watchCreateAccountSagasAsync } from "./account.saga";
import { watchDepositSagasAsync } from "./deposit.saga";
import { watchWithdrawSagasAsync } from './withdraw.saga';


export default function* sagas() {
  yield all([
    fork(watchCreateAccountSagasAsync),
    fork(watchDepositSagasAsync),
    fork(watchWithdrawSagasAsync)
  ]);
}
