import { postJSON, get, del, putJSON } from '@tkrotoff/fetch';
import { communityService } from '../utils/config';

export function createPost(sessionToken, userUuid, newPostText, draft, images) {
  return postJSON(`${communityService}/post`, {
    user: {uuid: userUuid},
    text:  newPostText,
    draft,
    images,
  }, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function createShare(sessionToken, userUuid, newPostText, images, postUuid) {
  return postJSON(`${communityService}/share`, {
    user: {uuid: userUuid},
    post: {uuid: postUuid},
    text:  newPostText,
    images,
  }, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function deletePost(sessionToken, postUuid) {
  return del(`${communityService}/post/${postUuid}`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function getDraftPosts(sessionToken) {
  return get(`${communityService}/post/draft`, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}

export function getPostsForUser(sessionToken, username) {
  return get(`${communityService}/posts/${username}`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function getLikedPostsForUser(username) {
  return get(`${communityService}/likes/${username}`);
}

export function getFollowPostsForUser(sessionToken, userUuid) {
  return get(`${communityService}/post/follows/${userUuid}`);
}

export function getPosts(sessionToken) {
  return get(`${communityService}/post`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function getPost(sessionToken, postUuid) {
  return get(`${communityService}/post/${postUuid}`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function updatePost(sessionToken, uuid, text, draft) {
  return putJSON(`${baseUrl}/post`, {
    uuid,
    text,
    draft,
  }, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}
