import { get, postJSON } from '@tkrotoff/fetch';
import { endpoints } from '../utils/config';

export function getAlbum(uuid) {
  return get(`${endpoints.image}/album/${uuid}`);
}

export function createAlbum(sessionToken, name) {
  return postJSON(`${endpoints.image}/album`, { name }, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}

export function getAlbums(username) {
  return get(`${endpoints.image}/albums/${username}`);
}
