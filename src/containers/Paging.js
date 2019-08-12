import React from 'react';
import PropTypes from 'prop-types';
import { PagingStyle } from '../styles/Paging.style';
import { animateScroll as scroll } from 'react-scroll';

const scrollToTop = () => scroll.scrollToTop();

function Paging({ handlePaging, handleChange, page }) {
  return (
    <PagingStyle className="paging-block">
      <button id="prev-button" value="prev" onClick={() => {handlePaging(); scrollToTop();}}>Previous</button>
      <form onSubmit={handlePaging}>
        <input name="page" placeholder={page} onChange={handleChange} />
      </form>
      <button id="next-button" value="next" onClick={() => {handlePaging(); scrollToTop();}}>Next</button>
    </PagingStyle>
  );
}

Paging.propTypes = {
  handlePaging: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  page: PropTypes.string
};

export default Paging;
