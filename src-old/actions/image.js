import { get, post } from '@tkrotoff/fetch';
import { imageService } from '../utils/config';

export function getImage(uuid) {
  return get(`${imageService}/image/${uuid}`);
}

export function getImagesForAlbum(uuid) {
  return get(`${imageService}/album/${uuid}/image`);
}

export function createImage(sessionToken, uuid, image) {
  let formData = new FormData();
  formData.append("image", image);
  return post(`${imageService}/album/${uuid}/image`, formData, {
    headers: {
      "x-session-token": sessionToken,
    },
  });
}

export function createLivestreamImage(sessionToken, image) {
  let formData = new FormData();
  formData.append("image", image);
  return post(`${imageService}/album/livestream`, formData, {
    headers: {
      "x-session-token": sessionToken,
    },
  });
}
