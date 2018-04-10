import { fetchUser } from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const START_LOADING_USER = 'START_LOADING_USER';

export const startLoadingUser = () => ({
  type: START_LOADING_USER,
});

export const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload,
});

export const requestUser = id => (dispatch) => {
  dispatch(startLoadingUser());
  return fetchUser(id)
    .then((fetchedUserData) => {
      dispatch(receiveUser(fetchedUserData));
    }, err => err);
};
