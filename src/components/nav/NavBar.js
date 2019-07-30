import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavStyle } from '../../styles/nav.style';
import DataList from './DataList';

function NavBar({ handleChange, handleSubmit, tagArr }) {
  return (
    <NavStyle>
      <Link to={'/search/recent'}>
        <h1>errDaddy</h1>
      </Link>

      <form onSubmit={handleSubmit}>
        
        <button>search</button>
        <input list="tagList" id="search-term" name="searchTerm" onChange={handleChange}/>
        <DataList tagArr={tagArr} />
      </form>

      <Link to={'/newErr'}>
        <p>new err</p>
      </Link>
    </NavStyle>
  );
}

NavBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  tagArr: PropTypes.array.isRequired
};

export default NavBar;
