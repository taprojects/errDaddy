import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavStyle } from '../../styles/nav.style';

function NavBar({ handleChange, handleSubmit }) {
  return (
    <NavStyle>
      <Link to={'/search/recent'}>
        <h1>errDaddy</h1>
      </Link>

      <form onSubmit={handleSubmit}>
        
        <button>search</button>
        <input list="tagList" id="search-term" name="searchTerm" onChange={handleChange}/>
        <datalist id="tagList">
          <option value="Boston" />
          <option value="Cambridge" />
        </datalist>
      </form>

      <Link to={'/newErr'}>
        <p>new err</p>
      </Link>
    </NavStyle>
  );
}

NavBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default NavBar;
