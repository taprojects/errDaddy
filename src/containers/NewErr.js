import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createNewError } from '../actions/errorActions';
import ErrorForm from '../components/errForm/ErrorForm';
import { FormStyle } from '../styles/form.style';


class NewErr extends PureComponent {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    title: '',
    errCode: '',
    description: '',
    solution: '',
    tags: ''
  };
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
    const {
      title,
      description,
      solution,
      tags
    } = this.state;
    this.props.onFormSubmit({ title, description, solution, tags });
    this.props.history.push('/displayErr/new');
  }

  render() {

    return (
      <FormStyle>
        <h1>New Solved Err Babbbieeee</h1>
        <ErrorForm handleChange={this.handleChange} handleFormSubmit={this.handleFormSubmit}/>
      </FormStyle>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit({ title, description, solution, tags }) {
    dispatch(createNewError({ title, description, solution, tags }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NewErr);
