import { LOGIN, LOGOUT } from 'actions/type';
import { STORAGE_KEYS } from 'utils/constants';
import { getIsLoggedIn } from 'utils';
import { Dispatch } from 'react';

export function loginAction() {
  return function (dispatch: Dispatch<any>) {
    localStorage.setItem(STORAGE_KEYS.IS_LOGGED_IN, 'true');
    dispatch({
      type: LOGIN,
      isLoggedIn: getIsLoggedIn(),
    });
  };
}

export function logoutAction() {
  return function (dispatch: Dispatch<any>) {
    localStorage.removeItem(STORAGE_KEYS.IS_LOGGED_IN);
    dispatch({
      type: LOGOUT,
      isLoggedIn: getIsLoggedIn(),
    });
  };
}
