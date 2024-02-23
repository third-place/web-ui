import { get, postJSON } from '@tkrotoff/fetch';
import { communityService } from '../../src/utils/config';

export function getReplies(sessionToken, postUuid) {
  return get(`${communityService}/post/${postUuid}/reply`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function createReply(sessionToken, postUuid, userUuid, text) {
  return postJSON(`${communityService}/reply`, {
    post: {
      uuid: postUuid,
    },
    user: {
      uuid: userUuid,
    },
    text,
  }, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}
