import React from 'react';
import PropTypes from 'prop-types';
import numGoodSpans from '../../functions/dependScore';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

function DependScore({ good, bad }) {
  const goodPercent = numGoodSpans(good, bad);
  let status = 'error';
  if(goodPercent >= 50) status = 'success';
  return (
    <>
      <Progress percent={goodPercent} status={status} type="line" />
    </>
  );
}

DependScore.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default DependScore;
