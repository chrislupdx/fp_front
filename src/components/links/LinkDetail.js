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
      <p>Shortened Url: {`${process.env.API_URL}`}{hashedUrl}</p>
      {/* <a href={`${process.env.API_URL}${{ hashedUrl }}`}>Click here</a> */}
    </section>
  );
}

LinkDetail.propTypes = {
  hyperlink: PropTypes.object.isRequired
};

export default LinkDetail;
