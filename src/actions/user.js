import { get, postJSON, putJSON } from '@tkrotoff/fetch';
import { userService } from '../utils/config';

export function signUp(username, email, password, inviteCode) {
  return fetch(
    `${userService}/user`,
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
  return get(`${userService}/user/${username}`)
}

export function updateUser(sessionToken, uuid, name, birthday, bio) {
  return putJSON(`${userService}/user`, {
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
  return postJSON(`${userService}/otp`, {
    user: { email },
    code,
  });
}

export function getUsers(sessionToken,) {
  return get(`${userService}/user`, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}
