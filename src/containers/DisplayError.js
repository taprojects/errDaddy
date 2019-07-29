import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../components/nav/NavBar';
import { getErrors } from '../actions/errorActions';
import { setSearchTerm } from '../actions/setSearchTerm';
import { selectNewError } from '../selectors/errSelectors';
 
class DisplayError extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    displayError: PropTypes.object,
    history: PropTypes.object.isRequired

  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.props.onSubmit(searchTerm || 'recent');
    this.props.fetch(searchTerm || 'recent');
    this.setState({ searchTerm: '' });
    this.props.history.push('/');

  }

  render() {
    const dumbyErr = {
      description: 'thing about me problem',
      errCode: 'err404',
      solution: 'heres how i fixed that thing',
      tags: '#javascript #bc1 #forms',
      title: 'title',
      good: 5,
      bad: 1
    };

    
    const { title, errCode, description, solution, tags } = this.props.displayError || dumbyErr;

    return (
      <>
        <NavBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <h2>{title}</h2>
        <p>{errCode}</p>
        <p>{description}</p>
        <p>{solution}</p>
        <p>{tags}</p>
      </>
    );
  }
}

const mapStateToProps = state => ({
  displayError: selectNewError(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetch(searchTerm) {
    dispatch(getErrors(searchTerm));
  },
  onSubmit(searchTerm) {
    dispatch(setSearchTerm(searchTerm));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayError);
