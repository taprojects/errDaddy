import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import { setSearchTerm } from '../actions/setSearchTerm';


class NewErr extends PureComponent {
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
    this.props.history.push('/');
  }

  render() {

    return (
      <>
        <NavBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <h1>New Err Babbbieeee</h1>
      </>
    );
  }
}

// const mapStateToProps = state => ({
//   searchTerm: selectSearchTerm(state),
//   errors: selectErrors(state)
// });

const mapDispatchToProps = (dispatch) => ({
  onSubmit(searchTerm) {
    dispatch(setSearchTerm(searchTerm));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NewErr);
