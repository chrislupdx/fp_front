import React from 'react';
import PropTypes from 'prop-types';
import Hyperlink from './hyperLink';

function List({ hyperlinks }) {
  const hyperlinkList = hyperlinks.map(link => (
    <li key={link._id}>
      <Hyperlink hyperLink={link} />
    </li>
  ));

  return (
    <ul>
      {hyperlinkList}
    </ul>
  );
}

List.propTypes = {
  hyperlinks: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
  })).isRequired
};

export default List;
