import { get, patchJSON } from '@tkrotoff/fetch';
import { notificationService } from '../../src/utils/config';

export function getNotifications(sessionToken) {
  return get(`${notificationService}/notification`, {
    headers: {
      'x-session-token': sessionToken,
    }
  });
}

export function acknowledgeNotifications(sessionToken, lastNotification, firstNotification) {
  return patchJSON(
    `${notificationService}/notification`,
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
