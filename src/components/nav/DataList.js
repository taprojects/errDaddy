import React from 'react';
import PropTypes from 'prop-types';
import TagOption from './TagOption';

function DataList({ tagArr }) {
  const tagList = tagArr.map((tag, i) => {
    return <TagOption tag={tag} key={i} />;
  });
  return (
    <datalist id="tagList">
      {tagList}
    </datalist>
  );
}

DataList.propTypes = {
  tagArr: PropTypes.array.isRequired
};

export default DataList;
