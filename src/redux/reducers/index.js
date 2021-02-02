import {combineReducers} from 'redux';
import filterModeReducer from './filterModeReducer';
import wordReducer from './wordReducer';

const reducer = combineReducers({
  words: wordReducer,
  filterMode: filterModeReducer,
});

export default reducer;
