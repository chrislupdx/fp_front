import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHyperLinksList, getHyperLinksLoading, getHyperLinksError } from '../selectors/HyperLinksSelector';
import { fetchHyperLinks } from '../actions/fetchHyperLinksAction';
import List from '../components/links/List';
import { deleteHyperLinkById } from '../actions/deleteByIdAction';

class HyperLinkListContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    hyperlinkList: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    deleteHyperLinkById: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  componentDidUpdate(prevProps) {
    if(this.props.hyperlinkList.length !== prevProps.hyperlinkList.length) {
      this.props.fetch();
    }
  }


  render() {
    const { hyperlinkList, loading, deleteHyperLinkById } = this.props;
    if(loading) return <h1>loading</h1>;
    return <List hyperlinks={hyperlinkList} deleteHyperLinkById={deleteHyperLinkById} />;
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
  }, deleteHyperLinkById(id) {
    dispatch(deleteHyperLinkById(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HyperLinkListContainer);
