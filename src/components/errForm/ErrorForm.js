import React from 'react';
import PropTypes from 'prop-types';
import { FormStyle } from '../../styles/form.style';

function ErrorForm({ handleFormSubmit, handleChange }) {
  return (
    <FormStyle>
      <form onSubmit={handleFormSubmit}>
        <input id='title' type="text" name="title" onChange={handleChange} placeholder='title for err' required />
        <textarea id='description' type="text" name="description" onChange={handleChange} placeholder='description' required />
        <textarea id='solution' type="text" name="solution" onChange={handleChange} placeholder='solution' required />
        <textarea id='tags' type="text" name="tags" onChange={handleChange} placeholder='tags' required />
        <button>submit new error</button>
      </form>
    </FormStyle>
  );
}

ErrorForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired
};

export default ErrorForm;
