import React from 'react';
import validator from 'validator';

const required = value => {
  if (validator.isEmpty(value)) {
    return (
      <small className="form-text text-danger">This field is required</small>
    );
  }
};

const amountNumber = value => {
  if(!validator.isFloat(value)) {
    return (
      <small className="form-text text-danger">
        Amount must be float
      </small>
    );
  }
}

const checkNumberic = value => {
  if(!validator.isNumeric(value)) {
    return (
      <small className="form-text text-danger">
        Account number must be number digits
      </small>
    );
  }
}

const email = value => {
  if (!validator.isEmail(value)) {
    return (
      <small className="form-text text-danger">
        Invalid Email
      </small>
    );
  }
};

const minLength6 = value => {
  if (value.trim().length < 6) {
    return (
      <small className="form-text text-danger">
        Password at least 6 digits
      </small>
    );
  }
};

const correctLength3 = value => {
  if (value.trim().length != 3) {
    return (
      <small className="form-text text-danger">
        CCV must be 3 digits
      </small>
    );
  }
};

const phone = value => {
  if (!validator.isMobilePhone(value)) {
    return (
      <small className="form-text text-danger">
        Invalid phone number
      </small>
    );
  }
};

export const validations = {
  minLength6,
  required,
  email,
  phone,
  amountNumber,
  checkNumberic,
  correctLength3
};
