import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrList from '../components/errs/ErrList';
import { getErrors } from '../actions/errorActions';
import { selectErrors } from '../selectors/errSelectors';
import { selectSearchTerm } from '../selectors/searchTermSelector';
import { ErrorContainerStyle } from '../styles/errorCotainer.style';
import { setSearchTerm } from '../actions/setSearchTerm';
import Paging from './Paging';
import pagePosts from '../utils/pagePosts';

const PER_PAGE = 20;

class ErrContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    newTagSearch: PropTypes.func,
    history: PropTypes.object.isRequired,
    errors: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    searchTerm: PropTypes.string,
    setNewSearchTerm: PropTypes.func.isRequired
  };

  state = {
    page: '1'
  }

  componentDidMount() {
    this.props.fetch(this.props.match.params.searchTerm);
  } 
  
  componentDidUpdate() {
    const { page } = this.state;
    const numPosts = this.props.errors.length;
    const totalPages = Math.ceil(numPosts / PER_PAGE);
    const prevBttn = document.querySelectorAll('#prev-button');
    const nextBttn = document.querySelectorAll('#next-button');
    const footer = document.querySelector('footer');

    if(this.props.searchTerm === 'recent' && this.props.errors.title === 'NO ERRORS FOR THIS TAG') {
      this.props.setNewSearchTerm('recent');
      this.props.fetch('recent');
    }

    if(this.props.history.location.search[0] === '?') {
      this.setState({ page: this.props.history.location.search.slice(6) });
    }

    if(page === '1') prevBttn.forEach(btn => btn.disabled = true);
    else prevBttn.forEach(btn => btn.disabled = false);
    
    if(page == totalPages) nextBttn.forEach(btn => btn.disabled = true);
    else nextBttn.forEach(btn => btn.disabled = false);

    if(totalPages == 1) footer.hidden = true;
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handlePaging = () => {
    event.preventDefault();
    let newPage = this.state.page;
    if(event.target.value === undefined) newPage = this.state.page;
    else event.target.value === 'prev' ? newPage-- : newPage++;
    this.props.history.push(`${this.props.history.location.pathname}?page=${newPage}`);    
  }

  render() {
    const { errors } = this.props;
    const searchTerm = this.props.match.params.searchTerm;
    const { page } = this.state;
    const postsToDisplay = pagePosts(page, PER_PAGE, errors);

    if(errors && page) {
      
      return (
        <ErrorContainerStyle>
          <header>
            <h2> &gt; {searchTerm || 'recent'}</h2>
            <Paging handleChange={this.handleChange} handlePaging={this.handlePaging} page={page} />
          </header>
          <ErrList errs={postsToDisplay} newTagSearch={this.setSearchTerm} />
          <footer>
            <Paging handleChange={this.handleChange} handlePaging={this.handlePaging} page={page} />
          </footer>
        </ErrorContainerStyle>
      );
    }
    return <h2>Loading...</h2>;
  }
}

const mapStateToProps = state => ({
  errors: selectErrors(state),
  searchTerm: selectSearchTerm(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetch(searchTerm) {
    dispatch(getErrors(searchTerm));
  },
  setNewSearchTerm(searchTerm) {
    dispatch(setSearchTerm(searchTerm));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrContainer);
