import React from 'react';
import PropTypes from 'prop-types';

function HyperLink({ hyperLink }) {
  return (
    <section>
      <p>{hyperLink.url}</p>
    </section>
  );
}

HyperLink.propTypes = {
  hyperLink: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default HyperLink;
