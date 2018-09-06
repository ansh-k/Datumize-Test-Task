import { SET_PROJECTS } from '../actions';
const initialState = {
  projects: [],
};

const project = (state = initialState, action) => {
  switch(action.type) {
    case SET_PROJECTS: {
      return {
        ...state,
        projects: action.item,
      };
    }
    default: return state;
  }
};

export default project;
