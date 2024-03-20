import { get, patchJSON } from '@tkrotoff/fetch';
import { endpoints } from '../utils/config';

export function getNotifications(sessionToken) {
  return get(`${endpoints.notification}/notification`, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}

export function acknowledgeNotifications(sessionToken, lastNotification, firstNotification) {
  return patchJSON(
    `${endpoints.notification}/notification`,
    {
      datetime_started: firstNotification.created_at,
      datetime_ended: lastNotification.created_at,
    },
    {
      headers: {
      'x-session-token': sessionToken,
    },
  })
}
