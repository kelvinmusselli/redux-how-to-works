import { TYPES } from './types';
import { api } from "../../../services/api";

const { GET_ALL, ADD_USER, DELETE_USER } = TYPES;


export function gettedUsers (users) {
  return {
    type: GET_ALL,
    payload:users,
  };
}


export function getUsers () {
  return async (dispatch) => {
    const { data } = await api.get('/users');
    dispatch(gettedUsers(data))
  }
};

export function addNewUser (user) {
  return async (dispatch) => {
    await api.post('/users', user);
    dispatch(getUsers());
    return {
      type: ADD_USER,
      payload: user,
    };
  }
};

export function removeUser(user) {
  return async (dispatch) => {
    await api.delete(`/users/${user.id}`);
    dispatch(getUsers());
    return {
      type: DELETE_USER,
      payload: user
    };
  }
};
