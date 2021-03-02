import actionTypes from './actionTypes';
import axios from 'axios';

const URL = 'https://servernode29122020.herokuapp.com/word';

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

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

export function fetchWords() {
  return (dispatch) => {
    // const params = new URLSearchParams();
    // params.append('en', 'Four');
    // params.append('vn', 'Bốn');

    axios
      .get(URL)
      .then((response) =>
        dispatch({
          type: actionTypes.ACTION_TYPE_FETCH_WORDS,
          words: response.data.words,
        }),
      )
      .catch((error) => console.log(error));
  };
}
