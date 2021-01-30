/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Word from '../components/Word';
import Form from '../components/Form';
import Filter from '../components/Filter';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {id: 1, en: 'One', vn: 'Một', isMemorized: false},
        {id: 2, en: 'Two', vn: 'Hai', isMemorized: true},
        {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
        {id: 4, en: 'Four', vn: 'Bốn', isMemorized: false},
        {id: 5, en: 'Five', vn: 'Năm', isMemorized: true},
      ].reverse(),
      filterMode: 'Show_All',
    };
  }
  onToggleWord = (item) => {
    const newWords = this.state.words.map((word) => {
      if (word.id === item.id) {
        return {...word, isMemorized: !item.isMemorized};
      }
      return word;
    });
    this.setState({words: newWords});
  };
  onRemoveWord = (item) => {
    const newWords = this.state.words.filter((word) => {
      if (word.id === item.id) {
        return false;
      }
      return true;
    });
    this.setState({words: newWords});
  };
  onAddWord = (newWord, callback) => {
    const newWords = Object.assign([], this.state.words);
    newWords.unshift(newWord);
    this.setState({words: newWords}, () => {
      callback();
    });
  };

  onSetFilterMode = (filterMode) => {
    this.setState({filterMode});
  };
  render() {
    return (
      <View style={styles.container}>
        <Form onAddWord={this.onAddWord} />
        <Filter
          onSetFilterMode={this.onSetFilterMode}
          filterMode={this.state.filterMode}
        />
        <Word
          onRemoveWord={this.onRemoveWord}
          onToggleWord={this.onToggleWord}
          words={this.state.words}
          filterMode={this.state.filterMode}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
