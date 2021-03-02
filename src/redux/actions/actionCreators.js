import actionTypes from './actionTypes';
import axios from 'axios';

const URL = 'https://servernode29122020.herokuapp.com/word/';

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

export function toggleWord(_id, isMemorized) {
  return (dispatch) => {
    const body = new URLSearchParams();
    body.append('isMemorized', isMemorized);

    axios
      .put(URL + _id, body)
      .then((response) => {
        if (response.data.success) {
          dispatch({
            type: actionTypes.ACTION_TYPE_TOGGLE_WORD,
            item: response.data.word,
          });
        }
      })
      .catch((error) => console.log(error));
  };
}

export function removeWord(_id) {
  return (dispatch) => {
    axios
      .delete(URL + _id)
      .then((response) => {
        if (response.data.success) {
          dispatch({
            type: actionTypes.ACTION_TYPE_REMOVE_WORD,
            item: response.data.word,
          });
        }
      })
      .catch((error) => console.log(error));
  };
}

export function setFilterMode(filterMode) {
  return {type: actionTypes.ACTION_TYPE_SET_FILTER_MODE, filterMode};
}

export function addWord(en, vn) {
  return (dispatch) => {
    const body = new URLSearchParams();
    body.append('en', en);
    body.append('vn', vn);

    axios
      .post(URL, body)
      .then((response) => {
        if (response.data.success) {
          dispatch({
            type: actionTypes.ACTION_TYPE_ADD_WORD,
            word: response.data.word,
          });
        }
      })
      .catch((error) => console.log(error));
  };
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
