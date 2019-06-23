import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HyperLinkByIDS } from '../selectors/HLbyIdSelector';
import LinkDetail from '../components/links/LinkDetail';
import { fetchHyperLinkById } from '../actions/fetchbyIdAction';

class LinkById extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
      // url: PropTypes.string.isRequired,
      match: PropTypes.object.isRequired
    }

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      const { url } = this.props;
      return <LinkDetail link ={url} />;
    }
}

const mapStateToProps = state => ({
  url: HyperLinkByIDS(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchHyperLinkById(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkById);
