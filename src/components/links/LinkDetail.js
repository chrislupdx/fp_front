import React from 'react';
import PropTypes from 'prop-types';

function LinkDetail({ hyperlink }) {
  const {
    url,
    name
  } = hyperlink;

  return (
    <section>
      <p>Url: {url}</p>
      <p>Name: {name}</p>
    </section>
  );
}

LinkDetail.propTypes = {
  hyperlink: PropTypes.object.isRequired
};

export default LinkDetail;
