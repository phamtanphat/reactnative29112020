/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Child extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            onPress={() => this.props.onIncrease()}
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
}
