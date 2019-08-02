import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../components/nav/NavBar';
import { setSearchTerm } from '../actions/setSearchTerm';
import { createNewError, getAllTags } from '../actions/errorActions';
import ErrorForm from '../components/errForm/ErrorForm';
import { selectTags } from '../selectors/errSelectors';
import { FormStyle } from '../styles/form.style';


class NewErr extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    fetchTags: PropTypes.func.isRequired,
    tags: PropTypes.array
  };

  state = {
    searchTerm: '',
    title: '',
    errCode: '',
    description: '',
    solution: '',
    tags: ''
  };

  componentDidMount() {
    if(!this.props.tags) this.props.fetchTags();
  } 
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  handleSearchSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.props.onSubmit(searchTerm);
    this.props.history.push(`/search/${searchTerm}`);
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
    const {
      title,
      description,
      solution,
      tags
    } = this.state;
    this.props.onFormSubmit({ title, description, solution, tags });
    this.props.history.push('/displayErr');
  }

  handleRecent = () => {
    this.props.onSubmit('recent');
    this.props.history.push('/search/recent');
  }

  render() {
    if(this.props.tags) {
      return (
        <>
        <NavBar 
          handleChange={this.handleChange} 
          handleSubmit={this.handleFormSubmit} 
          tagArr={this.props.tags} 
          handleRecent={this.handleRecent} 
        />
        <FormStyle>
          <h1>New Solved Err Babbbieeee</h1>
          <ErrorForm handleChange={this.handleChange} handleFormSubmit={this.handleFormSubmit}/>
        </FormStyle>
      </>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

const mapStateToProps = state => ({
  tags: selectTags(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(searchTerm) {
    dispatch(setSearchTerm(searchTerm));
  },
  onFormSubmit({ title, description, solution, tags }) {
    dispatch(createNewError({ title, description, solution, tags }));
  },
  fetchTags() {
    dispatch(getAllTags());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewErr);
