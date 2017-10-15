import * as types from './actionTypes.js';
import authorApi from '../api/mockAuthorApi.js';
import {beginAjaxCall, ajaxCallError} from './ajaxCallActions.js';


export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => { dispatch(ajaxCallError()); });
  };
}

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}
