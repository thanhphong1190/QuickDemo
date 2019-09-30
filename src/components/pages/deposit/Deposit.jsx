import React, { Component } from 'react';
import { Container, FormGroup, Label, Button, Col } from 'reactstrap';
import { connect } from 'react-redux';
import CheckButton from 'react-validation/build/button';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Select from 'react-validation/build/select';
import { validations } from '../../../helpers/validation.helper';
import './Deposit.css';
import { requestDeposit } from '../../../actions/deposit.action';
import CurrencyText from '../../common/CurrencyFormat/CurrencyText';

class Deposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: '',
      amount: 0,
      accountnum: 0,
      secrectcode: ''
    };
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  requestDeposit = async () => {
    const { currency, amount, accountnum, secrectcode } = this.state;
    const requestData = {
      currency,
      amount,
      accountnum,
      secrectcode
    };
    this.props.requestDeposit(requestData);
  };

  onSubmit = e => {
    e.preventDefault();
    this.form.validateAll();
    if (this.checkBtn.context._errors.length !== 0) return;
    this.requestDeposit();
  };

  render() {
    const { currency, amount, accountnum, secrectcode } = this.state;
    const { succeed, deposit } = this.props.depositData;
    const { totalBalance } = this.props.totalBalance;
    return (
      <div className="d-flex flex-column ContentBody">
        <div className="BodyHeader">
          <Container className="d-flex justify-content-center">
            <h5>Deposit</h5>
          </Container>
        </div>
        <div className="BodyContentContainer">
          <Container>
            <div className="d-flex flex-column align-items-center BodyContent">
              {succeed && deposit && (
                <div className="d-flex flex-column align-items-center">
                  <div><span>Deposited Amount:</span> <strong><CurrencyText value={deposit.amount} /></strong></div>
                  <div><span>Total Balance:</span> <strong><CurrencyText value={totalBalance} /></strong></div>
                </div>
              )}
              {!succeed && (
                <Form
                  ref={c => {
                    this.form = c;
                  }}
                  onSubmit={this.onSubmit}
                >
                  <FormGroup className="InputItem" row>
                    <Label for="currency" sm={3}>
                      Currency: *
                    </Label>
                    <Col sm={7}>
                      <Select
                        name="currency"
                        validations={[validations.required]}
                        value={currency}
                        className="form-control FormInputCustorm"
                        id="currency"
                        onChange={this.onInputChange}
                      >
                        <option value="" className="EmptyOption">
                          Currency
                        </option>
                        <option value="USD">USD</option>
                      </Select>
                    </Col>
                  </FormGroup>
                  <FormGroup className="InputItem" row>
                    <Label for="amount" sm={3}>
                      Amount: *
                    </Label>
                    <Col sm={7}>
                      <Input
                        type="text"
                        name="amount"
                        value={amount}
                        validations={[
                          validations.required,
                          validations.amountNumber
                        ]}
                        onChange={this.onInputChange}
                        placeholder="Amount"
                        id="amount"
                        className="form-control FormInputCustorm"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup className="InputItem" row>
                    <Label for="accountnum" sm={3}>
                      Account number: *
                    </Label>
                    <Col sm={7}>
                      <Input
                        type="text"
                        name="accountnum"
                        value={accountnum}
                        validations={[
                          validations.required,
                          validations.checkNumberic
                        ]}
                        onChange={this.onInputChange}
                        placeholder="Account Number"
                        id="accountnum"
                        className="form-control FormInputCustorm"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup className="InputItem" row>
                    <Label for="secrectcode" sm={3}>
                      Secrect Code (CVV): *
                    </Label>
                    <Col sm={7}>
                      <Input
                        type="text"
                        name="secrectcode"
                        value={secrectcode}
                        validations={[
                          validations.required,
                          validations.checkNumberic,
                          validations.correctLength3
                        ]}
                        onChange={this.onInputChange}
                        placeholder="Secrect Code"
                        id="secrectcode"
                        className="form-control FormInputCustorm"
                      />
                    </Col>
                  </FormGroup>

                  <CheckButton
                    style={{ display: 'none' }}
                    ref={c => {
                      this.checkBtn = c;
                    }}
                  />
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <Button
                      type="submit"
                      color="success"
                    >
                      Deposit
                    </Button>
                  </div>
                </Form>
              )}
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    depositData: state.deposit,
    totalBalance: state.totalBalance
  }),
  { requestDeposit }
)(Deposit);
