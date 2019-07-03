import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { P } from '../../styles'

function HyperLink({ hyperLink, deleteHyperLinkById }) {
  return (
    <section>
      <Link to={`/${hyperLink._id}`}>
        <P>{hyperLink.name}</P>
        <P>{hyperLink.url}</P>
      </Link>
      <FaTrashAlt onClick={deleteHyperLinkById.bind(null, hyperLink._id)} />
    </section>
  );
}

HyperLink.propTypes = {
  deleteHyperLinkById: PropTypes.func.isRequired,
  hyperLink: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default HyperLink;
