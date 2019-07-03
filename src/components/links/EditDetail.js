import React from 'react';
import PropTypes from 'prop-types';
import { FormButton, P } from '../../styles';

function EditForm({ onSubmit, onChange, url, name, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      <P>Edit Name:</P>
      <input name="name" value={name} onChange={onChange} />
      <P>Edit Url:</P>
      <input name="url" value={url} onChange={onChange} />
      <FormButton>{submitText}</FormButton>
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
