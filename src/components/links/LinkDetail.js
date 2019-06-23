import React from 'react';
import PropTypes from 'prop-types';

function LinkDetail({ link }) {
  const {
    url
  } = link;

  return (
    <section>
      <p>{url}</p>
    </section>
  );
}

LinkDetail.propTypes = {
  link: PropTypes.object.isRequired
};

export default LinkDetail;
