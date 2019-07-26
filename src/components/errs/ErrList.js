import React from 'react';
import PropTypes from 'prop-types';
import Err from './Err';

function ErrList({ errs }) {

  const errList = errs.map(err => {
    return (
      <li key={err.title}>
        <Err err={err} /> 
      </li>
    );
  });

  return (
    <ul>
      {errList}
    </ul>
  );
}

ErrList.propTypes = {
  errs: PropTypes.array.isRequired
};

export default ErrList;
