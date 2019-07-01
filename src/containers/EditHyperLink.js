import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { editLinkById } from '../actions/patchByIDAction';
import { HyperLinkByIDName, HyperLinkByIDURL } from '../selectors/HLbyIdSelector';
import EditForm from '../components/links/editForm';

class EditHyperLink extends PureComponent {
    static propTypes = {
      editHl: PropTypes.func,
      name: PropTypes.string,
      url: PropTypes.string
    }

    state = {
      name: '',
      url: ''
    }

    componentDidMount() {
      this.setState({
        url: this.props.url,
        name: this.props.name
      });
    }

    handleSubmit = event => {
      event.preventDefault();
      const {
        url,
        name
      } = this.state;

      this.props.editHl({
        name,
        url
      });

    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {
      const {
        name,
        url
      } = this.state;
      return (
        <EditForm
          onSubmit={this.handleSubmit} onChange={this.handleChange}
          name={name} url={url}
        />
      );
    }
}

const mapStateToProps = state => ({
  name: HyperLinkByIDName(state),
  url: HyperLinkByIDURL(state)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  editHl(url) {
    dispatch(editLinkById({ ...url, _id: match.params.id }));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditHyperLink));

