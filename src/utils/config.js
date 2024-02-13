const baseUrl = process.env.REACT_APP_BASE_URL || "https://api.thirdplaceapp.com";
const userService = process.env.USER_SERVICE;
const communityService = process.env.COMMUNITY_SERVICE;
const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL || "https://third-place-prod.s3.us-west-2.amazonaws.com";
const env = process.env.REACT_APP_ENV || "prod";
const appName = 'Home';
const primaryColor = '#e71d36';
const secondaryColor = '#95d5b2';
const backgroundColor = '#FDFFFC';

export {
  baseUrl,
  userService,
  communityService,
  imageBaseUrl,
  env,
  appName,
  primaryColor,
  secondaryColor,
  backgroundColor,
};
