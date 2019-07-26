import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrList from '../components/errs/ErrList';
import NavBar from '../components/NavBar';
import { getErrors } from '../actions/getErrs';
import { selectErrors } from '../selectors/errSelectors';
import { selectSearchTerm } from '../selectors/searchTermSelector';
import { setSearchTerm } from '../actions/setSearchTerm';

class ErrContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
    errors: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    searchTerm: ''
  }

  componentDidMount() {
    this.props.fetch(this.props.searchTerm);
  } 

  componentDidUpdate() {
  } 

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.props.onSubmit(searchTerm);
    this.props.fetch(searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {
    const { errors } = this.props;

    return (
      <>
        <NavBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <ErrList errs={errors} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: selectSearchTerm(state),
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
