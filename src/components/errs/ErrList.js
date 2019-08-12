import React from 'react';
import PropTypes from 'prop-types';
import Err from './Err';
import { ErrListStyle } from '../../styles/ErrList.style';

function ErrList({ errs }) {

  const errList = errs.map((err, i) => {
    return (
      <li key={i} >
        <Err err={err} /> 
      </li>
    );
  });

  return (
    <ErrListStyle>
      {errList}
    </ErrListStyle>
  );
}

ErrList.propTypes = {
  errs: PropTypes.array.isRequired
};

export default ErrList;
