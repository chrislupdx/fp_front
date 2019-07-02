import React from 'react';
import PropTypes from 'prop-types';

function EditForm({ onSubmit, onChange, url, name, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      <span>Edit Name:</span>
      <input name="name" value={name} onChange={onChange} />
      <span>Edit Url:</span>
      <input name="url" value={url} onChange={onChange} />
      <button>{submitText}</button>
    </form>
  );
}

EditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string,
  name: PropTypes.string,
  submitText: PropTypes.string
};

EditForm.defaultProps = {
  submitText: 'Edit Url/Name'
};

export default EditForm;
