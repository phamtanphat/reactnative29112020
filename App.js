/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import Box from './src/components/Box';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const defaultWord = [
  {id: 1, en: 'One', vn: 'Một', isMemorized: false},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: true},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
  {id: 4, en: 'Four', vn: 'Bốn', isMemorized: false},
  {id: 5, en: 'Five', vn: 'Năm', isMemorized: true},
].reverse();

function wordReducer(state = defaultWord, action) {
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

function filterModeReducer(state = 'Show_All', action) {
  if (action.type === 'SET_FILTER_MODE') {
    return action.filterMode;
  }
  return state;
}

const rootReducer = combineReducers({
  words: wordReducer,
  filterMode: filterModeReducer,
});

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </SafeAreaView>
    );
  }
}
