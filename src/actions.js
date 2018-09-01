import {CHANGE_SEARCHTERM} from './constants.js';

export const setSearchTerm = (text) => ({
  type: CHANGE_SEARCHTERM,
  payload: text
});
