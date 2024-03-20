import { get, post } from '@tkrotoff/fetch';
import { endpoints } from '../utils/config';

export function getImage(uuid) {
  return get(`${endpoints.image}/image/${uuid}`);
}

export function getImagesForAlbum(uuid) {
  return get(`${endpoints.image}/album/${uuid}/image`);
}

export function createImage(sessionToken, uuid, image) {
  let formData = new FormData();
  formData.append("image", image);
  return post(`${endpoints.image}/album/${uuid}/image`, formData, {
    headers: {
      "x-session-token": sessionToken,
    },
  });
}

export function createLivestreamImage(sessionToken, image) {
  let formData = new FormData();
  formData.append("image", image);
  return post(`${endpoints.image}/album/livestream`, formData, {
    headers: {
      "x-session-token": sessionToken,
    },
  });
}
