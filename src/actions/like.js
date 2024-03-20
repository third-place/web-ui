import { del, post } from '@tkrotoff/fetch';
import { endpoints } from '../utils/config';

export function createPostLike(sessionToken, uuid) {
  return post(`${endpoints.community}/post/${uuid}/like`, "", {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function deletePostLike(sessionToken, uuid) {
  return del(`${endpoints.community}/post/${uuid}/like`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}
