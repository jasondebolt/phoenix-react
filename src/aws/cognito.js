import {Config, CognitoIdentityCredentials} from "aws-sdk";
import appConfig from "./config";

export const authenticateUserAgainstGoogleToken = (googleToken) => {
  return new Promise((resolve, reject) => {

    var params = {
      IdentityPoolId: appConfig.IdentityPoolId,
      Logins: {
        'accounts.google.com': googleToken
      }
    };

    var otherConfig = {
      region: appConfig.region
    }

    Config.credentials = new CognitoIdentityCredentials(params, otherConfig);
    Config.region = appConfig.region;

    Config.credentials.refresh(function (error) {
      if (error) {
        return reject(error);
      } else {
        return resolve(Config.credentials);
      }
    });
  });
}
