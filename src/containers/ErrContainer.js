import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrList from '../components/errs/ErrList';
import { getErrors } from '../actions/errorActions';
import { selectErrors } from '../selectors/errSelectors';
import { selectSearchTerm } from '../selectors/searchTermSelector';
import { ErrorContainerStyle } from '../styles/errorCotainer.style';
import { setSearchTerm } from '../actions/setSearchTerm';

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

  componentDidMount() {
    this.props.fetch(this.props.match.params.searchTerm);
  } 
  
  componentDidUpdate() {
    // if(this.props.errors.length === 1 && this.props.searchTerm === 'recent') this.props.fetch(this.props.match.params.searchTerm);
    if(this.props.searchTerm === 'recent' && this.props.errors.title === 'NO ERRORS FOR THIS TAG') {
      this.props.setNewSearchTerm('recent');
      this.props.fetch('recent');
      
    }
  }

  render() {
    const { errors } = this.props;
    const searchTerm = this.props.match.params.searchTerm;

    if(errors) {
      return (
        <ErrorContainerStyle>
          <h2> &gt; {searchTerm || 'recent'}</h2>
          <ErrList errs={errors} newTagSearch={this.setSearchTerm} />
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
