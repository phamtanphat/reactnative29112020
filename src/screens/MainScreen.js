/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class MainScreen extends Component {
  render() {
    const word = {en: 'One', vn: 'Một'};
    return (
      <View style={styles.container}>
        <View style={styles.groupText}>
          <Text style={styles.textEn}>{word.en}</Text>
          <Text style={styles.textVn}>{word.vn}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  groupText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textEn: {
    color: 'green',
    fontWeight: '500',
  },
  textVn: {
    color: 'red',
    fontWeight: '500',
  },
});
