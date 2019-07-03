import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HyperLinkByID } from '../selectors/HLbyIdSelector';
import LinkDetail from '../components/links/LinkDetail';
import { fetchHyperLinkById } from '../actions/fetchbyIdAction';
import EditLinkContainer from '../containers/EditLinkContainer';
import { Main } from '../styles';

class LinkById extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
      hyperlink: PropTypes.object.isRequired,
      _id: PropTypes.string,
      name: PropTypes.string,
      match: PropTypes.object.isRequired,
    }

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      const { hyperlink } = this.props;
      return (
        <Main>
          <LinkDetail hyperlink = {hyperlink} />
          <EditLinkContainer
            id ={this.props.match.params.id}
            match={this.props.match}
          />
        </Main>
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
