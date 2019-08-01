import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrList from '../components/errs/ErrList';
import NavBar from '../components/nav/NavBar';
import { getErrors, getAllTags } from '../actions/errorActions';
import { setSearchTerm } from '../actions/setSearchTerm';
import { selectErrors, selectTags } from '../selectors/errSelectors';
import { selectSearchTerm } from '../selectors/searchTermSelector';

class ErrContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    fetchTags: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    tags: PropTypes.array,
    searchTerm: PropTypes.string
  };

  state = {
    searchTerm: this.props.match.params.searchTerm
  }

  componentDidMount() {
    this.setState({ searchTerm: this.props.match.params.searchTerm });
    this.props.fetch(this.props.match.params.searchTerm);
    this.props.fetchTags();
  } 
  
  componentDidUpdate() {
    if(this.props.errors.length === 0) this.props.fetch(this.props.match.params.searchTerm);
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
    const { searchTerm } = this.state;
    this.props.onSubmit(searchTerm || 'recent');
    this.props.fetch(searchTerm || 'recent');
    this.props.history.push(`/search/${searchTerm}`);
  }

  render() {
    const { errors, tags } = this.props;
    const searchTerm = this.props.match.params.searchTerm;

    if(errors && tags) {
      return (
        <>
        <NavBar 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          tagArr={this.props.tags} 
          handleRecent={this.handleRecent} 
        />
        <h2> &gt; {searchTerm || 'recent'}</h2>
        <ErrList errs={errors} />
      </>
      );
    }
    return <h2>Loading...</h2>;
  }
}

const mapStateToProps = state => ({
  errors: selectErrors(state),
  tags: selectTags(state),
  searchTerm: selectSearchTerm(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetch(searchTerm) {
    dispatch(getErrors(searchTerm));
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
)(ErrContainer);
