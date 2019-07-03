import React from 'react';
import PropTypes from 'prop-types';
import { P } from '../../styles';

function LinkDetail({ hyperlink }) {
  const {
    url,
    name,
    hashedUrl
  } = hyperlink;

  return (
    <section>
      <ul>
        <P>Url: {url}</P>
        <P>Name: {name}</P>
        <P>Shortened Url: {`${process.env.API_URL}`}{hashedUrl}</P>
        {/* <a href={`${process.env.API_URL}${{ hashedUrl }}`}>Click here</a> */}
      </ul>
    </section>

  );
}

LinkDetail.propTypes = {
  hyperlink: PropTypes.object.isRequired
};

export default LinkDetail;
