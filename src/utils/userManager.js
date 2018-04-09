import { createUserManager } from 'redux-oidc';

const ONELOGIN_SUBDOMAIN = 'mosaic';
const ONELOGIN_CLIENT_ID = '9feb92f0-1793-0136-2c16-0a8d4be3d0d219521';

const userManagerConfig = {
   authority: 'https://' + ONELOGIN_SUBDOMAIN + '.onelogin.com/oidc',
   client_id: ONELOGIN_CLIENT_ID,
   redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
   response_type: 'id_token token',
   scope: 'openid profile email',
   filterProtocolClaims: true,
   loadUserInfo: true
};

// Use for Google Login
//const userManagerConfig = {
//  client_id: '376634083496-lgv1f2dqm5u1pti1uggn6rhihvjorip5.apps.googleusercontent.com',
//  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
//  response_type: 'token id_token',
//  scope: 'openid profile email',
//  authority: 'https://accounts.google.com',
//  automaticSilentRenew: false,
//  filterProtocolClaims: true,
//  loadUserInfo: true,
//};

const userManager = createUserManager(userManagerConfig);

export default userManager;
