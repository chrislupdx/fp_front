import React from 'react';
import PropTypes from 'prop-types';

function EditForm({ onChange, onSubmit, submitText, url, name }) {
  return (
    <>
    <form onSubmit={onSubmit}>
      <span>Edit Url:</span>
      <input placeholder={url} name="url" value={url} onChange={onChange} />
      <span>Edit Name:</span>
      <input placeholder={name} name="name" value={name} onChange={onChange} />
    </form>
      <button>{submitText}</button>
    </>
  );
}

EditForm.propTypes = {
  onChange : PropTypes.func.isRequired,
  onSubmit : PropTypes.func.isRequired,
  submitText: PropTypes.string,

  url: PropTypes.string,
  name: PropTypes.string
};

EditForm.defaultProps = {
  submitText: 'Edit Url'
};

export default EditForm;
