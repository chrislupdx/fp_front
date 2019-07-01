import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editLinkById } from '../actions/patchByIDAction';
//import form component

class EditLinkContainer extends PureComponent {
    static propTypes = {
      EditLink: PropTypes.func.isRequired
    }

    state = {
      url: '',
      name: '',
    }

    handleSubmit = event => {
      event.preventDefault();
      const {
        url, name
      } = this.state;

      this.props.EditLink({
        url,
        name
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
        <p>here</p>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  EditLink(url) {
    dispatch(editLinkById(url));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(EditLinkContainer);
