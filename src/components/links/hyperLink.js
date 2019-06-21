import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HyperLink({ hyperLink }) {
  return (
    <section>
      <Link to={`/${hyperLink._id}`}>
        <p>{hyperLink.url}</p>
      </Link>
    </section>
  );
}

HyperLink.propTypes = {
  hyperLink: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default HyperLink;
