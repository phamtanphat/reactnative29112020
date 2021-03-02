
export default function wordReducer(state = [], action) {
  if (action.type === 'FETCH_WORDS') {
    return action.words;
  }
  if (action.type === 'TOGGLE_WORD') {
    const newWords = state.map((word) => {
      if (word._id === action.item._id) {
        return {...word, isMemorized: !action.item.isMemorized};
      }
      return word;
    });
    return newWords;
  }
  if (action.type === 'REMOVE_WORD') {
    const newWords = state.filter((word) => {
      if (word._id === action.item._id) {
        return false;
      }
      return true;
    });
    return newWords;
  }
  if (action.type === 'ADD_WORD') {
    const newWords = Object.assign([], state);
    newWords.unshift(action.word);
    return newWords;
  }
  return state;
}
