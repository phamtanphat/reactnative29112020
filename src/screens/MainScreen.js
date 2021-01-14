/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class MainScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'antiquewhite',
          flexDirection: 'column'
        }}>
        <Text> Text 1 </Text>
        <Text> Text 2 </Text>
      </View>
    );
  }
}
