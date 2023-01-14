import { get, postJSON } from '@tkrotoff/fetch';
import { baseUrl } from '../utils/config';

export function getInvites(sessionToken, offset) {
  return get(`${baseUrl}/invite?offset=${offset}`, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}

export function createInvite(sessionToken) {
  return postJSON(`${baseUrl}/invite`, {}, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}
