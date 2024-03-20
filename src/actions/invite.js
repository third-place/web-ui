import { get, postJSON } from '@tkrotoff/fetch';
import { endpoints } from '../utils/config';

export function getInvites(sessionToken, offset) {
  return get(`${endpoints.user}/invite?offset=${offset}`, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}

export function createInvite(sessionToken) {
  return postJSON(`${endpoints.user}/invite`, {}, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}
