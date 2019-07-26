import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavStyle } from './Nav';

function NavBar({ handleChange, handleSubmit }) {
  return (
    <NavStyle>
      <Link to={'/'}>
        <h1>errDaddy</h1>
      </Link>

      <form onSubmit={handleSubmit}>
        <button>search</button>
        <input type="text" placeholder="most recent" id="search-term" name="searchTerm" onChange={handleChange}/>
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
