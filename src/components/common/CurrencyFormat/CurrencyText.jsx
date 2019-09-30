import React from 'react';
import numeral from 'numeral';

const CurrencyText = ({ value, format }) => {
  return <span>{numeral(value).format(format)} USD</span>;
};

CurrencyText.defaultProps = {
  format: '0,0'
};

export default CurrencyText;
