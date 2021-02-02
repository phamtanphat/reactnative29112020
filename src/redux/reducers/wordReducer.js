const defaultWord = [
  {id: 1, en: 'One', vn: 'Một', isMemorized: false},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: true},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
  {id: 4, en: 'Four', vn: 'Bốn', isMemorized: false},
  {id: 5, en: 'Five', vn: 'Năm', isMemorized: true},
].reverse();

export default function wordReducer(state = defaultWord, action) {
  if (action.type === 'TOGGLE_WORD') {
    const newWords = state.map((word) => {
      if (word.id === action.item.id) {
        return {...word, isMemorized: !action.item.isMemorized};
      }
      return word;
    });
    return newWords;
  }
  if (action.type === 'REMOVE_WORD') {
    const newWords = state.filter((word) => {
      if (word.id === action.item.id) {
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
