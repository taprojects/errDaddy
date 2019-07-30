import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Err({ err }) {
  return (
    <Link to={`/displayErr/${err._id}`} >
      <p >{err.title}</p>
      {/* <DependScore good={err.good} bad={err.bad} /> */}
    </Link>
  );
}

Err.propTypes = {
  err: PropTypes.shape({
    title: PropTypes.string.isRequired,
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired
  })
};

export default Err;
