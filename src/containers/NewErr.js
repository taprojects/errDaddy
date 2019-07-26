import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../components/nav/NavBar';
import { setSearchTerm } from '../actions/setSearchTerm';
import { createNewError } from '../actions/errorActions';
import ErrorForm from '../components/errForm/ErrorForm';


class NewErr extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    searchTerm: '',
    title: '',
    errCode: '',
    description: '',
    solution: '',
    tags: ''
  };

  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  handleSearchSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.props.onSubmit(searchTerm);
    this.setState({ searchTerm: '' });
    this.props.history.push('/');
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
    const {
      title,
      errCode,
      description,
      solution,
      tags
    } = this.state;
    this.props.onFormSubmit({ title, errCode, description, solution, tags });
  }

  render() {

    return (
      <>
        <NavBar handleChange={this.handleChange} handleSubmit={this.handleSearchSubmit}/>
        <h1>New Solved Err Babbbieeee</h1>
        <ErrorForm handleChange={this.handleChange} handleFormSubmit={this.handleFormSubmit}/>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit(searchTerm) {
    dispatch(setSearchTerm(searchTerm));
  },
  onFormSubmit({ title, errCode, description, solution, tags }) {
    console.log(title, errCode, description, solution, tags);
    // dispatch new err to database
    dispatch(createNewError({ title, errCode, description, solution, tags }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NewErr);
