import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editLinkById } from '../actions/patchByIDAction';
import EditForm from '../components/links/EditDetail';

class EditLinkContainer extends PureComponent {
    static propTypes = {
      EditLink: PropTypes.func.isRequired,
      id: PropTypes.string,
      match: PropTypes.object.isRequired
    }

    state = {
      url: '',
      name: '',
    }

    handleSubmit = event => {
      event.preventDefault();
      const {
        url, name,
      } = this.state;

      this.props.EditLink({
        url,
        name,
      });

      this.setState({
        url: '',
        name: ''
      });
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {
      const { url, name } = this.state;
      return (
        <EditForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          url={url}
          name={name}
        />
      );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
  EditLink(url) {
    dispatch(editLinkById(props.match.params.id, url ));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(EditLinkContainer);
