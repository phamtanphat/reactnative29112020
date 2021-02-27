import actionTypes from './actionTypes';

export function toggleWord(item) {
  return {type: actionTypes.ACTION_TYPE_TOGGLE_WORD, item};
}
