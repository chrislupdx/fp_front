import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHyperLinksList, getHyperLinksLoading, getHyperLinksError } from '../selectors/HyperLinksSelector';
import { fetchHyperLinks } from '../actions/fetchHyperLinksAction';
import List from '../components/links/List';

class HyperLinkListContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    hyperlinkList: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { hyperlinkList, loading } = this.props;
    console.log(this.props);
    if(loading) return <h1>loading</h1>;
    return <List hyperlinks={hyperlinkList} />;
    // return <p>{hyperlinkList}</p>;
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HyperLinkListContainer);
