import React, { Component } from 'react';
import { connect } from "react-redux";
import { CallbackComponent } from "redux-oidc";
import userManager from "../utils/userManager";
import { authenticateUserAgainstGoogleToken } from '../aws/cognito'
import appConfig from "../aws/config";
import { loginSuccess, loginFailure, logOut } from '../actions'
import { withAlert } from 'react-alert'

class OneLoginCallbackPage extends Component {
  render() {
    // just redirect to '/' in both cases
    debugger;
    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={ (authResult) => {
          debugger;
          console.log('AUTH RESULT');
          console.log(authResult);
          authenticateUserAgainstGoogleToken(authResult.id_token).then((credentials) => {
            console.log('CREDENTIALS');
            console.log(credentials);
            const config = {
              accessKeyId: credentials.accessKeyId,
              secretAccessKey: credentials.secretAccessKey,
              sessionToken: credentials.sessionToken
            }
            const region = appConfig.region + ":";
            //store.update('user', {
            //  google: authResult.credentials,
            //  identity: config,
            //  uid: credentials.identityId.slice(region.length)
            //})
            console.log('Credentials..');
            console.log(credentials);
            //return credentials.identityId.slice(region.length);
            return credentials;
          }).then(credentials => {
            this.props.loginSuccess({
              accessKeyId: credentials.accessKeyId,
              secretAccessKey: credentials.secretAccessKey,
              sessionToken: credentials.sessionToken
            });
            this.props.history.push('/')
          })
          .catch(() => {
            this.props.loginFailure();
            this.props.alert.show('Failed to log in!!');
            console.log("Unable to log in and store data")
          });
          this.props.history.push('/')
        }}
        errorCallback={
          () => this.props.history.push('/')
        }
      >
        <div>Redirecting...</div>
      </CallbackComponent>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { loginSuccess, loginFailure, logOut})(withAlert(OneLoginCallbackPage));
