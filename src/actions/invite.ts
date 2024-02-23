import { get, postJSON } from '@tkrotoff/fetch';
import { userService } from '../../src/utils/config';

export function getInvites(sessionToken, offset) {
  return get(`${userService}/invite?offset=${offset}`, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}

export function createInvite(sessionToken) {
  return postJSON(`${userService}/invite`, {}, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}
