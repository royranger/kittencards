import {CHANGE_SEARCHTERM} from './constants.js';

const initialState = {
  searchTerm: ''
}

export const filterKittens = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCHTERM:
      return Object.assign({}, state, {searchTerm: action.payload});
    default:
      return state;
  }
}
