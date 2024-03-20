import { del, get, putJSON } from '@tkrotoff/fetch';
import { endpoints } from '../utils/config';

export function getUser(sessionToken) {
  return get(`${endpoints.user}/session?token=${sessionToken}`);
}

export function login(email, password) {
  return fetch(
    `${endpoints.user}/session`, {
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
  return putJSON(`${endpoints.user}/session?token=${token}`);
}

export function deleteSession(token) {
  return del(`${endpoints.user}/session?token=${token}`);
}
