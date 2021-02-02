/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Word from '../components/Word';
import Form from '../components/Form';
import Filter from '../components/Filter';
import {connect} from 'react-redux';

class MainScreen extends Component {
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
          filterMode={this.props.filterMode}
        />
        <Word
          onRemoveWord={this.onRemoveWord}
          words={this.props.words}
          filterMode={this.props.filterMode}
        />
      </View>
    );
  }
}

export default connect(function (state) {
  return {words: state.words, filterMode: state.filterMode};
})(MainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
