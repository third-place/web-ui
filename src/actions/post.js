import { postJSON, get, del, putJSON } from '@tkrotoff/fetch';
import { endpoints } from '../utils/config';

export function createPost(sessionToken, userUuid, newPostText, draft, images) {
  return postJSON(`${endpoints.community}/post`, {
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
  return postJSON(`${endpoints.community}/share`, {
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
  return del(`${endpoints.community}/post/${postUuid}`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function getDraftPosts(sessionToken) {
  return get(`${endpoints.community}/post/draft`, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}

export function getPostsForUser(sessionToken, username) {
  return get(`${endpoints.community}/posts/${username}`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function getLikedPostsForUser(username) {
  return get(`${endpoints.community}/likes/${username}`);
}

export function getFollowPostsForUser(sessionToken, userUuid) {
  return get(`${endpoints.community}/post/follows/${userUuid}`);
}

export function getPosts(sessionToken) {
  return get(`${endpoints.community}/post`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function getPost(sessionToken, postUuid) {
  return get(`${endpoints.community}/post/${postUuid}`, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function updatePost(sessionToken, uuid, text, draft) {
  return putJSON(`${endpoints.community}/post`, {
    uuid,
    text,
    draft,
  }, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}
