import React from 'react';
import NumberFormat from 'react-number-format';

// This function will return text or number with format
const getStrWithFormat = (str, format = '') => {
  return str ? (
    <NumberFormat
      value={str}
      displayType="text"
      format={format}
      className="format-column"
    />
  ) : (
    ''
  );
};

export { getStrWithFormat };
