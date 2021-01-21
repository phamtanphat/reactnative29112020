/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import Box from './src/components/Box';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex : 1}}>
        {/* <MainScreen /> */}
        <Box />
      </SafeAreaView>
    );
  }
}
