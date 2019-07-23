import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavStyle } from './Nav';

class NavBar extends PureComponent {
  static propTypes = {
  };

  state = {
    searchTerm: ''
  };

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {

      return (
        <NavStyle>
          <Link to={'/'}>
            <h1>errDaddy</h1>
          </Link>
          <div>
            <button>search</button>
            <input type="text" placeholder="most recent" id="search-term" name="searchTerm" onChange={this.handleChange}/>
            <Link to={'/newErr'}>
              <p>new err</p>
            </Link>
          </div>
        </NavStyle>
      );
    }
}

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = (dispatch) => ({
//   fetch(searchTerm) {
//     dispatch(getErrPosts(searchTerm));
//   }
// });

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(NavBar);
