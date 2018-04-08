import apigClientFactory from 'aws-api-gateway-client';
import appConfig from "./config";

export const getApiClient = (user) => {
  const apigClient = apigClientFactory.newClient({
      accessKey: user.accessKeyId,
      secretKey: user.secretAccessKey,
      sessionToken: user.sessionToken,
      invokeUrl: appConfig.RootApiUrl,
      region: appConfig.region
  });
  return apigClient;
}

/*
var params = {
  //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
  //userId: '1234',
};
// Template syntax follows url-template https://www.npmjs.com/package/url-template
var pathTemplate = '/posts'
var method = 'POST';
var additionalParams = {
  //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
  headers: {
      param0: '',
      param1: ''
  },
  queryParams: {
      param0: '',
      param1: ''
  }
};
var body = {
  //This is where you define the body of the request
};
*/
export const invokeApi = (user, params, pathTemplate, method, additionalParams, body) => {
  const apigClient = getApiClient(user);
  const request = apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
  .then(function(result) {
    console.log("Success", result);
    return result;
    //This is where you would put a success callback
  }).catch(function(result) {
    console.log("ERROR", result)
  });
  return request
}
