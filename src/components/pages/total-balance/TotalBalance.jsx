import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import CurrencyText from '../../common/CurrencyFormat/CurrencyText';
import './TotalBalance.css';

class TotalBalance extends Component {
  render() {
    const { totalBalance } = this.props.totalBalance;
    return (
      <div className="d-flex flex-column ContentBody">
        <div className="BodyHeader">
          <Container className="d-flex justify-content-center">
            <h5>Total Balance</h5>
          </Container>
        </div>
        <div className="BodyContentContainer">
          <Container>
            <div className="d-flex flex-column align-items-center BodyContent">
              <div>
                <span>Current Total Balance: </span>
                <strong><CurrencyText value={totalBalance} /></strong>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    totalBalance: state.totalBalance
  }),
  {  }
)(TotalBalance);