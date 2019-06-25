import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

function HyperLink({ hyperLink, deleteHyperLinkById }) {
  return (
    <section>
      <Link to={`/${hyperLink._id}`}>
        <p>{hyperLink.url}</p>
      </Link>
      <FaTrashAlt onClick={deleteHyperLinkById.bind(null, hyperLink._id)} />
    </section>
  );
}
//so the way that hyperlink is going ot recieve info is going to be fundamnetally different after the rework

HyperLink.propTypes = {
  deleteHyperLinkById: PropTypes.func.isRequired,
  hyperLink: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default HyperLink;
