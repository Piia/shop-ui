
const configuration = {
  client_id: 'shop-ui',
  redirect_uri: 'http://localhost:3000/authentication/callback',
  response_type: 'id_token token',
  post_logout_redirect_uri: 'http://localhost:3000/',
  scope: 'openid profile email',
  authority: 'http://localhost:9900/auth/realms/shop',
  silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback',
  automaticSilentRenew: true,
  loadUserInfo: true,
  triggerAuthFlow: true,
};

export default configuration;
