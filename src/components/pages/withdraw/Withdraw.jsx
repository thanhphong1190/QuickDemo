import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, FormGroup, Label, Col, Button } from 'reactstrap';
import CheckButton from 'react-validation/build/button';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { validations } from '../../../helpers/validation.helper';
import './Withdraw.css';
import { requestWithdraw } from '../../../actions/withdraw.action';
import CurrencyText from '../../common/CurrencyFormat/CurrencyText';

class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      withdrawAmount: '',
      isValidWithdraw: false
    };
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if(e.target.name === "withdrawAmount") {
      this.validateWithDrawAmount(e.target.value);
    }
  };

  validateWithDrawAmount = (_data) => {
    const { totalBalance } = this.props.totalBalance;
    if (_data > 0 && _data < totalBalance) {
      this.setState({ isValidWithdraw: true });
    } else {
      this.setState({ isValidWithdraw: false });
    }
  }

  requestWithdraw = async () => {
    const { withdrawAmount } = this.state;
    const requestData = {
      withdrawAmount
    };
    await this.props.requestWithdraw(requestData);
    this.setState({ withdrawAmount: '', isValidWithdraw: false });
  };

  onSubmit = e => {
    e.preventDefault();
    this.form.validateAll();
    if (this.checkBtn.context._errors.length !== 0 || !this.state.isValidWithdraw) return;
    this.requestWithdraw();
  };

  render() {
    const { withdrawAmount, isValidWithdraw } = this.state;
    const { totalBalance } = this.props.totalBalance;
    return (
      <div className="d-flex flex-column ContentBody">
        <div className="BodyHeader">
          <Container className="d-flex justify-content-center">
            <h5>Withdraw</h5>
          </Container>
        </div>
        <div className="BodyContentContainer">
          <Container>
            <div className="d-flex flex-column align-items-center BodyContent">
              <Form
                ref={c => {
                  this.form = c;
                }}
                onSubmit={this.onSubmit}
              >
                <FormGroup className="InputItem d-flex align-items-center" row>
                  <Label for="accountnum" sm={3}>
                    Total Balance:
                  </Label>
                  <Col sm={7}>
                    <strong><CurrencyText value={totalBalance} /></strong>
                  </Col>
                </FormGroup>
                <FormGroup className="InputItem" row>
                  <Label for="secrectcode" sm={3}>
                    Withdraw Amount: *
                  </Label>
                  <Col sm={7}>
                    <Input
                      type="text"
                      name="withdrawAmount"
                      value={withdrawAmount}
                      validations={[
                        validations.required,
                        validations.amountNumber
                      ]}
                      onChange={this.onInputChange}
                      placeholder="Withdraw Amount"
                      id="withdrawAmount"
                      className="form-control FormInputCustorm"
                    />
                    {
                      !isValidWithdraw && <small className="form-text text-danger">
                        Withdraw Amount between 0 and Total Balance
                    </small>
                    }
                  </Col>
                </FormGroup>

                <CheckButton
                  style={{ display: 'none' }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <Button type="submit" color="success">
                    Withdraw
                  </Button>
                </div>
              </Form>
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
  { requestWithdraw }
)(Withdraw);
