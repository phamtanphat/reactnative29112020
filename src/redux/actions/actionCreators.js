import actionTypes from './actionTypes';

export function toggleWord(item) {
  return {type: actionTypes.ACTION_TYPE_TOGGLE_WORD, item};
}

export function removeWord(item) {
  return {type: actionTypes.ACTION_TYPE_REMOVE_WORD, item};
}

export function setFilterMode(filterMode) {
  return {type: actionTypes.ACTION_TYPE_SET_FILTER_MODE, filterMode};
}

export function addWord(word) {
  return {type: actionTypes.ACTION_TYPE_ADD_WORD, word};
}
