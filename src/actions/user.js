import { get, postJSON, putJSON } from '@tkrotoff/fetch';
import { endpoints } from '../utils/config';

export function signUp(username, email, password, inviteCode) {
  return fetch(
    `${endpoints.user}/user`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        invite_code: inviteCode,
      })
    },
  );
}

export function getUserByUsername(username) {
  return get(`${endpoints.user}/user/${username}`)
}

export function updateUser(sessionToken, uuid, name, birthday, bio) {
  return putJSON(`${endpoints.user}/user`, {
    name,
    birthday,
    bio_message: bio,
    uuid: uuid,
  }, {
    headers: {
      'x-session-token': sessionToken,
    },
  });
}

export function submitOtp(email, code) {
  return postJSON(`${endpoints.user}/otp`, {
    user: { email },
    code,
  });
}

export function getUsers(sessionToken,) {
  return get(`${endpoints.user}/user`, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}
