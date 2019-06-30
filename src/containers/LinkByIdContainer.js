import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HyperLinkByID } from '../selectors/HLbyIdSelector';
import LinkDetail from '../components/links/LinkDetail';
import EditHyperLink from '../containers/EditHyperLink'
import { fetchHyperLinkById } from '../actions/fetchbyIdAction';

class LinkById extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
      hyperlink: PropTypes.object.isRequired,
      name: PropTypes.string,
      match: PropTypes.object.isRequired
    }

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      const { hyperlink } = this.props;
      return (
        <>
        <LinkDetail hyperlink = {hyperlink} />
        <EditHyperLink />
        </>
      );
    }
}

const mapStateToProps = state => ({
  hyperlink: HyperLinkByID(state)
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
