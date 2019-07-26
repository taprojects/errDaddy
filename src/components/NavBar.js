import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavStyle } from './Nav';
import { setSearchTerm } from '../actions/getErrs';


class NavBar extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    searchTerm: ''
  };

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();
      const { searchTerm } = this.state;
      this.props.onSubmit(searchTerm);
      this.setState({ searchTerm: '' });
    }

    render() {

      return (
        <NavStyle>
          <Link to={'/'}>
            <h1>errDaddy</h1>
          </Link>

          <form onSubmit={this.handleSubmit}>
            <button>search</button>
            <input type="text" placeholder="most recent" id="search-term" name="searchTerm" onChange={this.handleChange}/>
          </form>

          <Link to={'/newErr'}>
            <p>new err</p>
          </Link>
        </NavStyle>
      );
    }
}

// const mapStateToProps = state => ({

// });

const mapDispatchToProps = (dispatch) => ({
  onSubmit(searchTerm) {
    dispatch(setSearchTerm(searchTerm));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
