import React from 'react';
import PropTypes from 'prop-types';
import Hyperlink from './hyperLink';

function List({ hyperlinks, deleteDispatch }) {
  const hyperlinkList = hyperlinks.map(link => (
    <li key={link._id}>
      <Hyperlink deleteDispatch={deleteDispatch} hyperLink={link} />
    </li>
  ));

  return (
    <ul>
      {hyperlinkList}
    </ul>
  );
}

List.propTypes = {
  deleteDispatch: PropTypes.func.isRequired,
  hyperlinks: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
  })).isRequired
};

export default List;
