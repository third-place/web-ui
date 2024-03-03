const userService = process.env.USER_SERVICE || 'http://localhost:9004';
const communityService = process.env.COMMUNITY_SERVICE || 'http://localhost:9001';
const imageService = process.env.IMAGE_SERVICE || 'http://localhost:9002';
const notificationService = process.env.NOTIFICATION_SERVICE || 'http://localhost:9003';
const imageBaseUrl = process.env.IMAGE_HOST || 'https://thirdplace-local-dev.s3.us-west-2.amazonaws.com';
const env = 'prod';
const primaryColor = '#e71d36';
const secondaryColor = '#17A398';
const backgroundColor = '#FDFFFC';

export {
  userService,
  communityService,
  imageService,
  notificationService,
  imageBaseUrl,
  env,
  primaryColor,
  secondaryColor,
  backgroundColor,
};
