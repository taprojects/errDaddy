import React from 'react';
import PropTypes from 'prop-types';
import { TagStyle } from '../../styles/Tag.style';

function Tags({ tags }) {
  console.log(tags);
  const tagList = tags.map((tag, i) => {
    return (
      <p key={`${i}`}>{tag}</p>
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
