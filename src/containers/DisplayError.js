import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../components/nav/NavBar';
import Tags from '../components/errs/Tags';
import { getErrors, getDisplayError } from '../actions/errorActions';
import { setSearchTerm } from '../actions/setSearchTerm';
import { selectDisplay } from '../selectors/errSelectors';
import { DisplayStyle } from '../styles/DisplayError.style';
 
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
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state || 'recent';
    this.props.onSubmit(searchTerm);
    this.props.fetch(searchTerm);
    this.props.history.push(`/search/${searchTerm}`);

  }

  render() {

    const err = this.props.displayErr;
    if(err) {
      return (
        <>
          <NavBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          <DisplayStyle>
            <h2>Title:</h2>
            <p>{err.title}</p>
            <h2>Description:</h2>
            <p>{err.description}</p>
            <h2>Solution:</h2>
            <p>{err.solution}</p>
            <h2>Tags:</h2>
            <div><Tags tags={err.tags} /></div>
          </DisplayStyle>
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
