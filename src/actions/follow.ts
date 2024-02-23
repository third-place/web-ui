import { del, get, postJSON } from '@tkrotoff/fetch';
import { communityService } from '../../src/utils/config';

export function createFollow(sessionToken, userUuid, followingUuid) {
  return postJSON(`${communityService}/follow`, {
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
  return del(`${communityService}/follow/${followUuid}`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function getFollowing(userUuid) {
  return get(`${communityService}/follows/${userUuid}`);
}

export function getFollowers(userUuid) {
  return get(`${communityService}/followers/${userUuid}`);
}
