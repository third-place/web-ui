import { del, get, postJSON } from '@tkrotoff/fetch';
import { endpoints } from '../utils/config';

export function createFollow(sessionToken, userUuid, followingUuid) {
  return postJSON(`${endpoints.community}/follow`, {
    following: {
      uuid: followingUuid,
    },
  }, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function deleteFollow(sessionToken, followUuid) {
  return del(`${endpoints.community}/follow/${followUuid}`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function getFollowing(userUuid) {
  return get(`${endpoints.community}/follows/${userUuid}`);
}

export function getFollowers(userUuid) {
  return get(`${endpoints.community}/followers/${userUuid}`);
}
