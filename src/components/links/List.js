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
//the way that list recieves information is going to be fundamentally different afte rthe rework

List.propTypes = {
  deleteHyperLinkById: PropTypes.func,
  hyperlinks: PropTypes.objectOf(PropTypes.shape({
    _id: PropTypes.string,
  }))
};

export default List;
