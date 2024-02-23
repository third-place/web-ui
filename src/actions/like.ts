import { del, post } from '@tkrotoff/fetch';
import { communityService } from '../../src/utils/config';

export function createPostLike(sessionToken, uuid) {
  return post(`${communityService}/post/${uuid}/like`, "", {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function deletePostLike(sessionToken, uuid) {
  return del(`${communityService}/post/${uuid}/like`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}
