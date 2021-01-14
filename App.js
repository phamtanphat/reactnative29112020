import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {MainScreen , showInFo} from './src/screens/MainScreen';

export default class App extends Component {
  render() {
    showInFo();
    return (
      <View>
        <MainScreen />
      </View>
    );
  }
}
