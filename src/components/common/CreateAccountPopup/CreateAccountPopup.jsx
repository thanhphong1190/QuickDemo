import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalBody, ModalHeader, Button, FormGroup, Label } from 'reactstrap';
import CheckButton from 'react-validation/build/button';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { validations } from '../../../helpers/validation.helper';
import './CreateAccountPopup.css';
import { toggleCreateAccountPopup, createAccount } from '../../../actions/account.action';

class CreateAccountPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            phone: '',
            email: '',
            password: ''
        };
    }

    toggleModal = () => {
        this.props.toggleCreateAccountPopup(false);
    };

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    requestCreateAccount = async () => {
        const { fullname, phone, email, password } = this.state;
        const requestData = {
            fullname, phone, email, password
        }
        this.props.createAccount(requestData);
    }

    onSubmit = e => {
        e.preventDefault();
        this.form.validateAll();
        if (this.checkBtn.context._errors.length !== 0) return;
        this.requestCreateAccount()
    };

    render() {
        const { fullname, phone, email, password } = this.state;
        const {
            isOpenCreateAccount
        } = this.props.toggleCreateAccount;
        return (
            <Modal
                isOpen={isOpenCreateAccount}
                toggle={this.toggleModal}
                className="CreateAccountPopup"
                size="lg"
            >
                <ModalHeader className="d-flex justify-content-center">
                    Create Account
                </ModalHeader>
                <ModalBody>
                    <div className="d-flex flex-column justify-content-center align-items-center CreateAccountForm">
                        <Form
                            ref={c => {
                                this.form = c;
                            }}
                            onSubmit={this.onSubmit}
                        >
                            <FormGroup className="InputItem">
                                <Label for="fullname">Full Name: *</Label>
                                <Input
                                    type="text"
                                    name="fullname"
                                    value={fullname}
                                    validations={[validations.required]}
                                    onChange={this.onInputChange}
                                    placeholder="Fullname"
                                    id="fullname"
                                    className="form-control FormInputCustorm"
                                />
                            </FormGroup>
                            <FormGroup className="InputItem">
                                <Label for="phone">Phone Number: *</Label>
                                <Input
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    validations={[validations.required, validations.phone]}
                                    onChange={this.onInputChange}
                                    placeholder="Phone number"
                                    id="phone"
                                    className="form-control FormInputCustorm"
                                />
                            </FormGroup>
                            <FormGroup className="InputItem">
                                <Label for="email">Email Address: *</Label>
                                <Input
                                    type="text"
                                    name="email"
                                    value={email}
                                    validations={[validations.email]}
                                    onChange={this.onInputChange}
                                    placeholder="Email"
                                    id="email"
                                    className="form-control FormInputCustorm"
                                />
                            </FormGroup>
                            <FormGroup className="InputItem">
                                <Label for="password">Password: *</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={password}
                                    validations={[validations.required, validations.minLength6]}
                                    onChange={this.onInputChange}
                                    placeholder="Password"
                                    id="password"
                                    className="form-control FormInputCustorm"
                                />
                            </FormGroup>
                            <CheckButton
                                style={{ display: 'none' }}
                                ref={c => {
                                    this.checkBtn = c;
                                }}
                            />
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <Button type="submit" color="success">
                                    Create Account
                                </Button>
                            </div>
                        </Form>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

export default connect(
    state => ({
        toggleCreateAccount: state.toggleCreateAccount,
        createAccountData: state.createAccount
    }),
    { toggleCreateAccountPopup, createAccount }
)(CreateAccountPopup);
