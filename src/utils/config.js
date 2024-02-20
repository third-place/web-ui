const baseUrl = process.env.REACT_APP_BASE_URL || 'https://api.thirdplaceapp.com';
const userService = process.env.REACT_APP_USER_SERVICE || 'http://localhost:9004';
const communityService = process.env.REACT_APP_COMMUNITY_SERVICE || 'http://localhost:9001';
const imageService = process.env.REACT_APP_IMAGE_SERVICE || 'http://localhost:9002';
const notificationService = process.env.REACT_APP_NOTIFICATION_SERVICE || 'http://localhost:9003';
const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL || 'https://third-place-prod.s3.us-west-2.amazonaws.com';
const env = process.env.REACT_APP_ENV || 'prod';
const appName = 'Home';
const primaryColor = '#e71d36';
const secondaryColor = '#95d5b2';
const backgroundColor = '#FDFFFC';

export {
  baseUrl,
  userService,
  communityService,
  imageService,
  notificationService,
  imageBaseUrl,
  env,
  appName,
  primaryColor,
  secondaryColor,
  backgroundColor,
};
