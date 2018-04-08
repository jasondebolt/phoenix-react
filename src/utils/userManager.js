import { createUserManager } from 'redux-oidc';


// Use for Google Login
const userManagerConfig = {
  client_id: '376634083496-lgv1f2dqm5u1pti1uggn6rhihvjorip5.apps.googleusercontent.com',
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
  response_type: 'token id_token',
  scope: 'openid profile email',
  authority: 'https://accounts.google.com',
  automaticSilentRenew: false,
  filterProtocolClaims: true,
  loadUserInfo: true,
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
