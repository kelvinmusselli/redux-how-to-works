/* eslint-disable default-case */
import { TYPES } from './types';
import { INITIAL_STATE } from './states';

const { GET_ALL, DELETE_USER, ADD_USER } = TYPES;

const users = (state = INITIAL_STATE, action) => {

  switch(action.type) {

    case GET_ALL: {
      return { ...state, users: action.payload }
    }

    case ADD_USER: {
      return { ...state, user: action.payload }
    }

    case DELETE_USER: {
      return { ...state,  user: action.payload }
    }

    default: {
      return state;
    }

  }
}

export default users;
