import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Err({ err }) {
  if(!err._id) return <h3>{err.title}</h3>;
  return (
    <Link to={`/displayErr/${err._id}`} >
      <p>{err.title}</p>
      <span>{err.time.slice(0, 10)}</span>
      <div>
        <span>Good {err.good}</span>
        <span>bad {err.bad}</span>
      </div>
    </Link>
  );
}

Err.propTypes = {
  err: PropTypes.shape({
    title: PropTypes.string.isRequired,
    good: PropTypes.number,
    bad: PropTypes.number,
    _id: PropTypes.string,
    time: PropTypes.string.isRequired
  })
};

export default Err;
