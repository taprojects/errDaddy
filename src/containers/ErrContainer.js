import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrList from '../components/errs/ErrList';
import NavBar from '../components/nav/NavBar';
import { getErrors } from '../actions/errorActions';
import { setSearchTerm } from '../actions/setSearchTerm';
import { selectErrors } from '../selectors/errSelectors';

class ErrContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  state = {
    searchTerm: this.props.match.params.searchTerm
  }

  componentDidMount() {
    this.setState({ searchTerm: this.props.match.params.searchTerm });
    this.props.fetch(this.props.match.params.searchTerm);
  } 

  componentDidUpdate() {
    if(this.props.errors.length === 0) this.props.fetch(this.props.match.params.searchTerm);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.props.onSubmit(searchTerm || 'recent');
    this.props.fetch(searchTerm || 'recent');
    this.props.history.push(`/search/${searchTerm}`);
  }

  render() {
    const { errors } = this.props;
    const searchTerm = this.props.match.params.searchTerm;

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
