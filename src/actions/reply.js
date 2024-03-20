import { get, postJSON } from '@tkrotoff/fetch';
import { endpoints } from '../utils/config';

export function getReplies(sessionToken, postUuid) {
  return get(`${endpoints.community}/post/${postUuid}/reply`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function createReply(sessionToken, postUuid, userUuid, text) {
  return postJSON(`${endpoints.community}/reply`, {
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
