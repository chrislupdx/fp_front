import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHyperLinksList, getHyperLinksLoading, getHyperLinksError } from '../selectors/HyperLinksSelector';
import { fetchHyperLinks } from '../actions/fetchHyperLinksAction';
import List from '../components/links/List';
import { deleteHyperLinkById } from '../actions/deleteByIdAction';
import deleteDispatch from '../Utils/deleteDispatch';

class HyperLinkListContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    hyperlinkList: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    deleteHyperLinkById: PropTypes.func,
    deleteDispatch: PropTypes.func
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { hyperlinkList, loading, deleteDispatch } = this.props;
    if(loading) return <h1>loading</h1>;
    return <List hyperlinks={hyperlinkList} deleteDispatch={deleteDispatch} />;
  }
}

const mapStateToProps = state => ({
  hyperlinkList: getHyperLinksList(state),
  loading: getHyperLinksLoading(state),
  error: getHyperLinksError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchHyperLinks());
  }, 
  bananba: () => deleteDispatch(id);
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HyperLinkListContainer);
