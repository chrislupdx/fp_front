import React from 'react';
import PropTypes from 'prop-types';

function LinkForm({ onSubmit, onChange, url, name, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      <span>Name:</span>
      <input name="name" value={name} onChange={onChange} />
      <span>Url:</span>
      <input name="url" value={url} onChange={onChange} />
      <button>{submitText}</button>
    </form>
  );
}

LinkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string,
  submitText: PropTypes.string
};

LinkForm.defaultProps = {
  submitText: 'Add Url'
};

export default LinkForm;
