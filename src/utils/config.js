const imageBaseUrl = import.meta.env.VITE_IMAGE_HOST || 'https://thirdplace-local-dev.s3.us-west-2.amazonaws.com';
const env = 'prod';
const primaryColor = '#e71d36';
const secondaryColor = '#17A398';
const backgroundColor = '#FDFFFC';

const envConfig = {
  production: {
    user: 'https://user-service.thirdplaceapp.com',
    community: 'https://community-service.thirdplaceapp.com',
    image: 'https://image-service.thirdplaceapp.com',
    notification: 'https://notification-service.thirdplaceapp.com',
  },
  development: {
    user: 'https://user-service.thirdplaceappdev.com',
    community: 'https://community-service.thirdplaceappdev.com',
    image: 'https://image-service.thirdplaceappdev.com',
    notification: 'https://notification-service.thirdplaceappdev.com',
  },
};

console.log(import.meta.env);

const endpoints = envConfig[import.meta.env.MODE];

export {
  imageBaseUrl,
  env,
  primaryColor,
  secondaryColor,
  backgroundColor,
  endpoints,
};
