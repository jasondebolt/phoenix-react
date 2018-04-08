import React, { Component } from 'react';
import userManager from "../../utils/userManager";

class GoogleLoginOpenId extends Component {
  onLoginButtonClick(event) {
    event.preventDefault();
    userManager.signinRedirect();
  }

  render() {
    return (
        <button className="btn btn-danger" onClick={this.onLoginButtonClick}>Google Login (OpenID)</button>
    );
  }
}

export default GoogleLoginOpenId;
