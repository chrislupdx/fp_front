import React from 'react';
import PropTypes from 'prop-types';
import Hyperlink from './hyperLink';

function List({ hyperlinks, deleteHyperLinkById }) {
  const hyperlinkList = hyperlinks.map(link => (
    <li key={link._id}>
      <Hyperlink deleteHyperLinkById={deleteHyperLinkById} hyperLink={link} />
    </li>
  ));

  return (
    <ul>
      {hyperlinkList}
    </ul>
  );
}

List.propTypes = {
  deleteHyperLinkById: PropTypes.func.isRequired,
  hyperlinks: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
  })).isRequired
};

export default List;
