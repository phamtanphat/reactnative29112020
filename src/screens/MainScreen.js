/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {getWidth} from '../helpers/AppDimension';

export default class MainScreen extends Component {
  render() {
    const word = {en: 'One', vn: 'Một'};
    return (
      <View style={styles.container}>
        <View style={styles.groupWord}>
          <View style={styles.groupHorizontal}>
            <Text style={styles.textEn}>{word.en}</Text>
            <Text style={styles.textVn}>{word.vn}</Text>
          </View>
          <View style={styles.groupHorizontal}>
            <TouchableOpacity style={styles.buttonMemorize}>
              <Text style={styles.textMemorize}>Forgot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRemove}>
              <Text style={styles.textRemove}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  groupWord: {
    height: 100,
    backgroundColor: 'gainsboro',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  groupHorizontal: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textEn: {
    color: 'green',
    fontWeight: '500',
    fontSize: getWidth() / 22,
  },
  textVn: {
    color: 'red',
    fontWeight: '500',
    fontSize: getWidth() / 22,
  },
  buttonMemorize: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonRemove: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
  },
  textMemorize: {
    color: 'white',
    fontSize: getWidth() / 22,
  },
  textRemove: {
    color: 'darkblue',
    fontSize: getWidth() / 22,
  },
});
