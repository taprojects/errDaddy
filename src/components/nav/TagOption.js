import React from 'react';
import PropTypes from 'prop-types';

function TagOption({ tag }) {
  return <option value={tag}>{tag}</option>;
}

TagOption.propTypes = {
  tag: PropTypes.string.isRequired
};

export default TagOption;
