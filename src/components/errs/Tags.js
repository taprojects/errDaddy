import React from 'react';
import PropTypes from 'prop-types';
import { TagStyle } from '../../styles/Tag.style';
import { Link } from 'react-router-dom';

function Tags({ tags }) {
  const tagList = tags.map((tag, i) => {
    return (
      <Link to={`/search/${tag}`} key={`${i}`}>{tag}</Link>
    );
  });
  return (
    <TagStyle>{tagList}</TagStyle>
  );
}

Tags.propTypes = {
  tags: PropTypes.array
};

export default Tags;
