import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { NavStyle } from '../styles/nav.style';
import { selectTags } from '../selectors/errSelectors';
import { getErrors, getAllTags } from '../actions/errorActions';
import { setSearchTerm } from '../actions/setSearchTerm';
import DataList from '../components/nav/DataList';
import { withRouter } from 'react-router-dom';

class NavBar extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    fetchTags: PropTypes.func.isRequired,
    tags: PropTypes.array,
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.object
  };

  state = {
    searchTerm: ''
  };

  componentDidMount() {
    if(!this.props.tags) this.props.fetchTags();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.props.onSubmit(searchTerm);
    this.props.fetch(searchTerm);
    this.props.history.push(`/search/${searchTerm}`);
    this.setState({ searchTerm: '' });
  }

  returnHome = () => {
    this.props.fetch('recent');
    this.props.onSubmit('recent');
    this.props.history.push('/search/recent');
  }

  render() {
    const tagArr = this.props.tags;
    if(tagArr) {
      return (
        <>
       <NavStyle>
         <h1 onClick={this.returnHome}>errDaddy</h1>
         <form onSubmit={this.handleSubmit}>
           <input 
             list="tagList" 
             id="search-term" 
             name="searchTerm" 
             onChange={this.handleChange} 
             placeholder="search errors by #tag"
             value={this.state.searchTerm}
           />
           <DataList tagArr={tagArr} />
         </form>
         <div>
           <Link to={'/newErr'}>new err</Link>
         </div>
       </NavStyle>
      </>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

const mapStateToProps = state => ({
  tags: selectTags(state),
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
