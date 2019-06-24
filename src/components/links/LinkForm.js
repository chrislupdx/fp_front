import React from 'react';
import PropTypes from 'prop-types';

function LinkForm({ onSubmit, onChange, url, name, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      <input name="url" value={url} onChange={onChange} />
      <input name="name" value={name} onChange={onChange} />
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
