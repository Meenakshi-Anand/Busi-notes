import * as SessionAPIUtil from '../util/session_api_util';

export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user
});
export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});
export const receiveErrors = (errors) => ({
  type: REMOVE_ERRORS,
  errors
});

export const googleLogin = () => dispatch => {
  return SessionAPIUtil.googleLogin()
  .then(user => {
    dispatch(receiveCurrentUser(user));
  }, (err => {
    dispatch(receiveErrors(err.responseJSON));
  }));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
  .then(()=> {
    dispatch(logoutCurrentUser());
  }, (err) => {
    dispatch(receiveErrors(err.responseJSON));
  });
};
