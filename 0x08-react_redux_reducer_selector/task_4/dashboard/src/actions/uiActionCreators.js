import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function loginRequest(email, password) {
  return (dispatch) => {
    boundLogin(email, password);

    return fetch("http://localhost:8564/login-success.json")
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
}