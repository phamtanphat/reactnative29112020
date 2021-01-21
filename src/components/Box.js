/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello',
    };
  }
  render() {
    console.log('render');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> {this.state.text} </Text>
        <TouchableOpacity
          style={{padding: 10, backgroundColor: 'red', marginTop: 10}}>
          <Text>Random Number</Text>
        </TouchableOpacity>
      </View>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
}
