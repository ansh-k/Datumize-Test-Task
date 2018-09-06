import { SET_ROLES } from '../actions';

const initialState = {
  roles: [],
};

const role = (state = initialState, action) => {
  switch(action.type) {
    case SET_ROLES: {
      return {
        ...state,
        roles: action.item,
      };
    }
    default: return state;
  }
};

export default role;
