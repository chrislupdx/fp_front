import React from 'react';
import PropTypes from 'prop-types';

function LinkDetail({ hyperlink }) {
  const {
    url,
    name,
    hashedUrl
  } = hyperlink;

  return (
    <section>
      <p>Url: {url}</p>
      <p>Name: {name}</p>
      <p>Shrunk URL: https://linkserver001.herokuapp.com/{hashedUrl}</p>
      {/* <a href=https://linkserver001.herokuapp.com/{hashedUrl}? ></a> */}
    </section>
  );
}

LinkDetail.propTypes = {
  hyperlink: PropTypes.object.isRequired
};

export default LinkDetail;
