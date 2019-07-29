import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrList from '../components/errs/ErrList';
import NavBar from '../components/nav/NavBar';
import { getErrors } from '../actions/errorActions';
import { setSearchTerm } from '../actions/setSearchTerm';
import { selectErrors } from '../selectors/errSelectors';
import { selectSearchTerm } from '../selectors/searchTermSelector';

class ErrContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
    errors: PropTypes.array.isRequired
  };

  state = {
    searchTerm: ''
  }

  componentDidMount() {
    this.props.fetch(this.props.searchTerm || 'recent');
  } 

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.props.onSubmit(searchTerm || 'recent');
    this.props.fetch(searchTerm || 'recent');
    this.setState({ searchTerm: '' });
  }

  render() {
    const { errors, searchTerm } = this.props;

    return (
      <>
        <NavBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <h2> &gt; {searchTerm || 'recent'}</h2>
        <ErrList errs={errors} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: selectSearchTerm(state) || '',
  errors: selectErrors(state)
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
)(ErrContainer);
