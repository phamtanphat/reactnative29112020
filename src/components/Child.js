/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Child extends Component {
  render() {
    console.log('Child render');
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            onPress={this.props.onIncrease}
            style={{backgroundColor: 'green', padding: 10, borderRadius: 5}}>
            <Text>Increase</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.onDecrease}
            style={{backgroundColor: 'red', padding: 10, borderRadius: 5}}>
            <Text>Decrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.onReset}
            style={{backgroundColor: 'yellow', padding: 10, borderRadius: 5}}>
            <Text>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.onRandomText}
            style={{backgroundColor: 'gray', padding: 10, borderRadius: 5}}>
            <Text>Random text</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
