import { SET_CURRENT_USER, SET_USERS } from '../actions';

const initialState = {
  users: [],
  currentUser: {},
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.item,
      };
    }
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.item,
      }
    }
    default: return state;
  }
};

export default user;
