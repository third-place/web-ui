import { del, get, putJSON } from '@tkrotoff/fetch';
import { userService } from '../utils/config';

export function getUser(sessionToken) {
  return get(`${userService}/session?token=${sessionToken}`);
}

export function login(email, password) {
  return fetch(
    `${userService}/session`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
}

export function refreshSession(token) {
  return putJSON(`${userService}/session?token=${token}`);
}

export function deleteSession(token) {
  return del(`${userService}/session?token=${token}`);
}
