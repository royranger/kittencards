import {
  CHANGE_SEARCHTERM,
  REQUEST_KITTENS_SUCCESS,
  REQUEST_KITTENS_FAILED,
  REQUEST_KITTENS_PENDING
} from './constants.js';


const initialStateSearch = {
  searchTerm: ''
}

export const filterKittens = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCHTERM:
      return Object.assign({}, state, {searchTerm: action.payload});
    default:
      return state;
  }
}

const initialStateKittens = {
  isPending: false,
  kittens: [],
  error: ''
}

export const requestKittens = (state=initialStateKittens, action={}) => {
  switch(action.type) {
    case REQUEST_KITTENS_PENDING:
      return Object.assign({}, state, {isPending: true});
    case REQUEST_KITTENS_SUCCESS:
      return Object.assign({}, state, {kittens: action.payload, isPending: false});
    case REQUEST_KITTENS_FAILED:
      return Object.assign({}, state, {error: action.payload, isPending: false});
    default:
      return state;
  }
}
