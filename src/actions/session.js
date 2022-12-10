import { del, get, putJSON } from '@tkrotoff/fetch';
import { baseUrl } from '../utils/config';

export function getUser(sessionToken) {
  return get(`${baseUrl}/session?token=${sessionToken}`);
}

export function login(email, password) {
  return fetch(
    `${baseUrl}/session`, {
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
  return putJSON(`${baseUrl}/session?token=${token}`);
}

export function deleteSession(token) {
  return del(`${baseUrl}/session?token=${token}`);
}
