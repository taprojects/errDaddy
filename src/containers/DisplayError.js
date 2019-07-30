import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../components/nav/NavBar';
import { getErrors, getDisplayError } from '../actions/errorActions';
import { setSearchTerm } from '../actions/setSearchTerm';
import { selectDisplay } from '../selectors/errSelectors';
 
class DisplayError extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    displayErr: PropTypes.object,
    history: PropTypes.object.isRequired,
    fetchDisplay: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  };

  state = {
    searchTerm: ''
  }

  componentDidMount() {
    this.props.fetchDisplay(this.props.match.params.errId);
    console.log(this.props.displayErr);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state || 'recent';
    this.props.onSubmit(searchTerm);
    this.props.fetch(searchTerm);
    this.setState({ searchTerm: '' });
    this.props.history.push('/');

  }

  render() {

    const err = this.props.displayErr;
    if(err) {
      console.log();
      return (
        <>
          <NavBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          <h2>{err.title}</h2>
          <p>{err.description}</p>
          <p>{err.solution}</p>
          <p>{err.tags}</p>
        </>
      );
    }
    return <h1>loading</h1>;
  
  }
}

const mapStateToProps = state => ({
  displayErr: selectDisplay(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetch(searchTerm) {
    dispatch(getErrors(searchTerm));
  },
  fetchDisplay(errId) {
    dispatch(getDisplayError(errId));
  },
  onSubmit(searchTerm) {
    dispatch(setSearchTerm(searchTerm));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayError);
