/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

// hook
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
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 30,
            color: 'black',
            marginBottom: 10,
          }}>
          Count : 0
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            style={{backgroundColor: 'green', padding: 10, borderRadius: 5}}>
            <Text>Increase</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: 'red', padding: 10, borderRadius: 5}}>
            <Text>Decrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: 'yellow', padding: 10, borderRadius: 5}}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
}
