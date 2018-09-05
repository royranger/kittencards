import {
  CHANGE_SEARCHTERM,
  REQUEST_KITTENS_SUCCESS,
  REQUEST_KITTENS_FAILED,
  REQUEST_KITTENS_PENDING
} from './constants.js';

export const setSearchTerm = (text) => ({
  type: CHANGE_SEARCHTERM,
  payload: text
});

export const requestKittens = () => (dispatch) => {
  dispatch({type: REQUEST_KITTENS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(people => dispatch({type: REQUEST_KITTENS_SUCCESS, payload: people}))
    .catch(error => dispatch({type: REQUEST_KITTENS_FAILED, payload: error}))
}
