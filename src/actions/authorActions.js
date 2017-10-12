import * as types from './actionTypes.js';
import authorApi from '../api/mockAuthorApi.js';

export function loadAuthors() {
  return function(dispatch) {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => { throw(error); });
  };
}

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}
