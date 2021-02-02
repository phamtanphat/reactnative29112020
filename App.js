/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import Box from './src/components/Box';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const defaultStore = {
  words: [
    {id: 1, en: 'One', vn: 'Một', isMemorized: false},
    {id: 2, en: 'Two', vn: 'Hai', isMemorized: true},
    {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
    {id: 4, en: 'Four', vn: 'Bốn', isMemorized: false},
    {id: 5, en: 'Five', vn: 'Năm', isMemorized: true},
  ].reverse(),
  filterMode: 'Show_All',
};

const store = createStore((state = defaultStore, action) => {
  if (action.type === 'TOGGLE_WORD') {
    const newWords = state.words.map((word) => {
      if (word.id === action.item.id) {
        return {...word, isMemorized: !action.item.isMemorized};
      }
      return word;
    });
    return {...state, words: newWords};
  }
  return state;
});

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
