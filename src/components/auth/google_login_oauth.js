import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { authenticateUserAgainstGoogleToken } from '../../aws/cognito'
//import store from 'react-native-simple-store';
import appConfig from "../../aws/config";
import { loginSuccess, loginFailure, logOut } from '../../actions'
import { withAlert } from 'react-alert'

class GoogleLoginOauth extends Component {

  responseGoogle(googleUser) {
    console.log('GoogleUser...');
    console.log(googleUser);
    if (googleUser.isSignedIn()) {
      console.log('Successfully logged into Google!');
      var authResult = googleUser.getAuthResponse();

      authenticateUserAgainstGoogleToken(authResult.id_token).then((credentials) => {
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
      })
      .catch(() => {
        this.props.loginFailure();
        this.props.alert.show('Failed to log in!!');
        console.log("Unable to log in and store data")
      });
    }
  }

  render() {
    return (
        <GoogleLogin
          clientId="376634083496-lgv1f2dqm5u1pti1uggn6rhihvjorip5.apps.googleusercontent.com"
          buttonText="Google Login (OAuth)"
          className="btn btn-danger"
          onSuccess={this.responseGoogle.bind(this)}
          onFailure={this.responseGoogle.bind(this)}
        />
    )
  }

}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { loginSuccess, loginFailure, logOut})(withAlert(GoogleLoginOauth));
