const userService = import.meta.env.VITE_USER_SERVICE || 'http://localhost:9004';
const communityService = import.meta.env.VITE_COMMUNITY_SERVICE || 'http://localhost:9001';
const imageService = import.meta.env.VITE_IMAGE_SERVICE || 'http://localhost:9002';
const notificationService = import.meta.env.VITE_NOTIFICATION_SERVICE || 'http://localhost:9003';
const imageBaseUrl = import.meta.env.VITE_IMAGE_HOST || 'https://thirdplace-local-dev.s3.us-west-2.amazonaws.com';
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
