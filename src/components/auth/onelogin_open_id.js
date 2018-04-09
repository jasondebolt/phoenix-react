import React, { Component } from 'react';
import userManager from "../../utils/userManager";

class OneLoginOpenId extends Component {
  onLoginButtonClick(event) {
    event.preventDefault();
    userManager.signinRedirect({state:'some data'}).then(function() {
      console.log('OneLogin redirect succeeded!')
    }).catch(function(err) {
      console.log('OneLogin redirect failed!')
    });
  }

  render() {
    return (
        <button className="btn btn-danger" onClick={this.onLoginButtonClick}>OneLogin (OpenID)</button>
    );
  }
}

export default OneLoginOpenId;
