import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export const boundLogin = (filter) =>
  dispatch(login(filter));

export function logout() {
  return {
    type: LOGOUT,
  };
}

export const boundLogout = (filter) =>
  dispatch(logout(filter));

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export const boundDisplayNotificationDrawer = (filter) =>
  dispatch(displayNotificationDrawer(filter));

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export const boundHideNotificationDrawer = (filter) =>
  dispatch(hideNotificationDrawer(filter));
