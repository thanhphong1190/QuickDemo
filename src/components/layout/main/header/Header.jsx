import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import './Header.css';
import { toggleCreateAccountPopup } from '../../../../actions/account.action';

class AppHeader extends Component {

  togglePopup = () => {
    this.props.toggleCreateAccountPopup(true)
  }

  render() {

    const { succeed, account } = this.props.createAccountData;
    return (
      <div className="Header">
        <Row>
          <Col xs="12">
            <Row className="d-flex align-items-center justify-content-between HeaderContainer">
              <div className="AppLogo">
                <img src="https://demo.org.pk/wp-content/uploads/2018/08/demo-logo-new1-e1533117947557.png" alt="logo demo" />
              </div>
              <h5>Money Transaction Demo</h5>
              {
                (succeed && account) ? <span className="HeaderFullname">Welcome {account.fullname}</span> : (<Button color="success" onClick={() => this.togglePopup()}>
                Create Account
              </Button>)
              }
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  state => ({
    createAccountData: state.createAccount
  }),
  { toggleCreateAccountPopup }
)(AppHeader);