import React from 'react';
import PropTypes from 'prop-types';
import { FormInput, FormButton, SpanStyle } from '../../styles';

function LinkForm({ onSubmit, onChange, url, name, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      <SpanStyle>Name:</SpanStyle>
      <FormInput name="name" value={name} onChange={onChange} />
      <SpanStyle>Url:</SpanStyle>
      <FormInput name="url" value={url} onChange={onChange} />
      <FormButton>{submitText}</FormButton>
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
