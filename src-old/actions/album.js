import { get, postJSON } from '@tkrotoff/fetch';
import { imageService } from '../utils/config';

export function getAlbum(uuid) {
  return get(`${imageService}/album/${uuid}`);
}

export function createAlbum(sessionToken, name) {
  return postJSON(`${imageService}/album`, { name }, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}

export function getAlbums(username) {
  return get(`${imageService}/albums/${username}`);
}
