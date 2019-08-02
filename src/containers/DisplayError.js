import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../components/nav/NavBar';
import Tags from '../components/errs/Tags';
import { getErrors, getDisplayError, getAllTags } from '../actions/errorActions';
import { setSearchTerm } from '../actions/setSearchTerm';
import { selectDisplay, selectTags } from '../selectors/errSelectors';
import { DisplayStyle } from '../styles/DisplayError.style';
 
class DisplayError extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    displayErr: PropTypes.object,
    history: PropTypes.object.isRequired,
    fetchDisplay: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    fetchTags: PropTypes.func.isRequired,
    tags: PropTypes.array
  };

  state = {
    searchTerm: ''
  }

  componentDidMount() {
    const errId = this.props.match.params.errId;
    if(errId) this.props.fetchDisplay(errId);
    if(!this.props.tags) this.props.fetchTags();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleRecent = () => {
    this.props.fetch('recent');
    this.props.onSubmit('recent');
    this.props.history.push('/search/recent');
  }

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state || 'recent';
    this.props.onSubmit(searchTerm);
    this.props.fetch(searchTerm);
    this.props.history.push(`/search/${searchTerm}`);
  }

  render() {

    let newErrMessage = <h2>Your new Error</h2>;
    if(this.props.match.params.errId) newErrMessage = <h2 hidden></h2>;
    
    const { displayErr, tags } = this.props;
    if(displayErr && tags) {
      return (
        <>
          <NavBar 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} 
            tagArr={this.props.tags} 
            handleRecent={this.handleRecent} 
          />
          <DisplayStyle>
            {newErrMessage}
            <h2>Title:</h2>
            <p>{displayErr.title}</p>
            <h2>Description:</h2>
            <p>{displayErr.description}</p>
            <h2>Solution:</h2>
            <p>{displayErr.solution}</p>
            <h2>Tags:</h2>
            <div className="tagList"><Tags tags={displayErr.tags} /></div>
            <section className="helpfull">
              <div>
                <button className="good" >This was helpful</button>
                <span className="good">{displayErr.good}</span>
              </div>
              <div>
                <button className="bad" >This was bad advice</button>
                <span className="bad">{displayErr.bad}</span>
              </div>
            </section>
          </DisplayStyle>
        </>
      );
    }
    return <h1>loading</h1>;
  
  }
}

const mapStateToProps = state => ({
  displayErr: selectDisplay(state),
  tags: selectTags(state)
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
  },
  fetchTags() {
    dispatch(getAllTags());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayError);
