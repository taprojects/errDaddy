import React from 'react';
import PropTypes from 'prop-types';
// import DependScore from './DependScore';

function Err({ err }) {

  return (
    <>
      <p>{err.title}</p>
      {/* <DependScore good={err.good} bad={err.bad} /> */}
    </>
  );
}

Err.propTypes = {
  err: PropTypes.shape({
    title: PropTypes.string.isRequired,
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  })
};

export default Err;
