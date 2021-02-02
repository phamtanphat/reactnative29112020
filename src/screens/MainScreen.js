/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Word from '../components/Word';
import Form from '../components/Form';
import Filter from '../components/Filter';
import {connect} from 'react-redux';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Form />
        <Filter filterMode={this.props.filterMode} />
        <Word words={this.props.words} filterMode={this.props.filterMode} />
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
