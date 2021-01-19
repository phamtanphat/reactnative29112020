/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {getWidth} from '../helpers/AppDimension';

export default class MainScreen extends Component {
  render() {
    const words = [
      {id: 1, en: 'One', vn: 'Một', isMemorized: false},
      {id: 2, en: 'Two', vn: 'Hai', isMemorized: true},
      {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
      {id: 4, en: 'Four', vn: 'Bốn', isMemorized: false},
      {id: 5, en: 'Five', vn: 'Năm', isMemorized: false},
    ];
    return (
      <View style={styles.container}>
        {words.map((word) => {
          return (
            <View key={word.id}>
              <View style={styles.groupWord}>
                <View style={styles.groupHorizontal}>
                  <Text style={styles.textEn}>{word.en}</Text>
                  <Text style={styles.textVn}>
                    {word.isMemorized ? '----' : word.vn}
                  </Text>
                </View>
                <View style={styles.groupHorizontal}>
                  <TouchableOpacity
                    style={{
                      ...styles.buttonMemorize,
                      backgroundColor: word.isMemorized ? 'green' : 'red',
                    }}>
                    <Text style={styles.textMemorize}>
                      {word.isMemorized ? 'Forgot' : 'Memorize'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonRemove}>
                    <Text style={styles.textRemove}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
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
    marginBottom : 10,
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
