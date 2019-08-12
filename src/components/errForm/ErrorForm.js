import React from 'react';
import PropTypes from 'prop-types';
import { FormStyle } from '../../styles/form.style';

function ErrorForm({ handleFormSubmit, handleChange }) {
  return (
    <FormStyle>
      <form onSubmit={handleFormSubmit}>

        <div className="input-items" >
          <span>title: </span>
          <input id='title' type="text" name="title" onChange={handleChange} placeholder='title of my post' required />
        </div>

        <div className="input-items" >
          <span>description: </span>
          <textarea id='description' type="text" name="description" onChange={handleChange} placeholder='I was trying to *** and *** was going wrong...' required />
        </div>

        <div className="input-items" >
          <span>solution: </span>
          <textarea id='solution' type="text" name="solution" onChange={handleChange} placeholder='finally i did ***** and everything started working' required />
        </div>

        <div className="input-items" >
          <span>tags: </span>
          <textarea id='tags' type="text" name="tags" onChange={handleChange} placeholder='#programing radiobuttons JavaScript' required />
        </div>

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
