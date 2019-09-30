import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Table, InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap';
import './TransactionHistory.css';
import { sortTransactionHistory, searchTransactionHistory } from '../../../actions/transaction-history.action';
import _ from 'lodash';
import CurrencyText from '../../common/CurrencyFormat/CurrencyText';

class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.delayedCallback = _.debounce(this.search, 1000);
  }

  onSearchChange = e => {
    e.persist();
    this.delayedCallback(e);
  };

  search = e => {
    this.props.searchTransactionHistory(e.target.value);
  };

  sortBy(name, type) {
    const sortData = {
      name,
      type
    };
    this.props.sortTransactionHistory(sortData);
  }

  render() {
    const { transactionHistory } = this.props.transactionHistoryData;

    return (
      <div className="d-flex flex-column ContentBody">
        <div className="BodyHeader">
          <Container className="d-flex justify-content-center">
            <h5>Transaction History</h5>
          </Container>
        </div>
        <div className="BodyContentContainer">
          <Container>
            <div className="d-flex flex-column align-items-center BodyContent">
              <div className="d-flex justify-content-end HistorySearchBar">
                <InputGroup>
                  <Input placeholder="Type name to search" disabled={transactionHistory.length === 0} onChange={this.onSearchChange}/>
                  <InputGroupAddon addonType="append">
                    <InputGroupText>Search</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>
              <Table bordered>
                <thead>
                  <tr>
                    <th>
                      <div className="d-flex align-items-center">
                        <span className="HistoryTitle">Transaction Name</span>
                        <div className="d-flex flex-column HistorySort">
                          <i
                            className="fa fa-caret-up"
                            aria-hidden="true"
                            onClick={() => this.sortBy('name', 'asc')}
                          ></i>
                          <i
                            className="fa fa-caret-down"
                            aria-hidden="true"
                            onClick={() => this.sortBy('name', 'desc')}
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="d-flex align-items-center">
                        <span className="HistoryTitle">Amount</span>
                        <div className="d-flex flex-column HistorySort">
                          <i
                            className="fa fa-caret-up"
                            aria-hidden="true"
                            onClick={() => this.sortBy('amount', 'asc')}
                          ></i>
                          <i
                            className="fa fa-caret-down"
                            aria-hidden="true"
                            onClick={() => this.sortBy('amount', 'desc')}
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th className="d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="HistoryTitle">Time</span>
                        <div className="d-flex flex-column HistorySort">
                          <i
                            className="fa fa-caret-up"
                            aria-hidden="true"
                            onClick={() => this.sortBy('time', 'asc')}
                          ></i>
                          <i
                            className="fa fa-caret-down"
                            aria-hidden="true"
                            onClick={() => this.sortBy('time', 'desc')}
                          ></i>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactionHistory &&
                    transactionHistory.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td><CurrencyText value={item.amount} /></td>
                          <td>{item.time}</td>
                        </tr>
                      );
                    })}
                  {transactionHistory.length === 0 && (
                    <tr>
                      <td colSpan={3}>No records show</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    transactionHistoryData: state.transactionHistory
  }),
  { sortTransactionHistory, searchTransactionHistory }
)(TransactionHistory);
