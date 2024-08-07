const API_ENDPOINTS = {
  // auth API
  AUTH_TOKENS: '/auth/tokens',
  AUTH_REGISTER: '/auth/register',
  AUTH_LOGIN: '/auth/login',
  AUTH_LOGOUT: '/auth/logout',
  AUTH_OAUTH2: '/auth/tokens-by-cookie',
  AUTH_EMAIL_VERIFICATION: '/auth/email-verification',
  AUTH_TOTP: 'auth/totp-verification',

  // user API
  USER: '/user',

  // spaces API
  SPACES: '/spaces',
  SPACES_SEARCH: '/spaces/search',

  // categories API
  CATEGORIES: '/categories',
};

export default API_ENDPOINTS;
