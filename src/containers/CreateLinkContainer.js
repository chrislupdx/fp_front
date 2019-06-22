import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postHyperLink } from '../actions/postHyperLinksAction';
import LinkForm from '../components/links/LinkForm';

class CreateLinkContainer extends PureComponent {
    static propTypes = {
      CreateLink: PropTypes.func.isRequired
    }

    state = {
      url: ''
    }

    handleSubmit = event => {
      event.preventDefault();
      const { url } = this.state;
      this.props.CreateLink({ url });
      this.setState({ url: '' });
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {
      const { url } = this.state;
      return (
        <LinkForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          url={url}
          submitText="Add Url"
        />
      );
    }
}

const mapDispatchToProps = dispatch => ({
  CreateLink(url) {
    dispatch(postHyperLink(url));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateLinkContainer);

