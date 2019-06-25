import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

function HyperLink({ hyperLink, deleteDispatch }) {
  return (
    <section>
      <Link to={`/${hyperLink._id}`}>
        <p>{hyperLink.url}</p>
      </Link>
      <FaTrashAlt onClick={deleteDispatch.bind(null, hyperLink._id)} />
    </section>
  );
}

HyperLink.propTypes = {
  deleteDispatch: PropTypes.func.isRequired,
  hyperLink: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default HyperLink;
