import React, { Component } from "react";
import { Switch, Route } from "react-router-dom"
import Deposit from "../../../pages/deposit/Deposit"
import Withdraw from "../../../pages/withdraw/Withdraw"
import TransactionHistory from '../../../pages/transaction-history/TransactionHistory'
import TotalBalance from '../../../pages/total-balance/TotalBalance'
import "./ContentBody.css";

class ContentBody extends Component {
  render() {
    return (
      <div className="ContentBody">
        <Switch>
          <Route exact = {true} path="/" component={Deposit} />
          <Route path= "/deposit" component={Deposit} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/transaction-history" component={TransactionHistory} />
          <Route path="/total-balance" component={TotalBalance} />
          <Route render={() => <div className="NotFoundMessage">404 Page Not Found</div>} />
        </Switch>
      </div>
    );
  }
}

export default ContentBody;
