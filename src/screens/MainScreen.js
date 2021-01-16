/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'column', flex: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'orange',
            }}>
            <Text style={{color: 'black'}}>A</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'blue',
            }}>
            <Text style={{color: 'black'}}>B</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'pink',
            }}>
            <Text style={{color: 'black'}}>C</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'gray',
            }}>
            <Text style={{color: 'black'}}>D</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'orange',
            }}>
            <Text style={{color: 'black'}}>A</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'blue',
            }}>
            <Text style={{color: 'black'}}>B</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'pink',
            }}>
            <Text style={{color: 'black'}}>C</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'gray',
            }}>
            <Text style={{color: 'black'}}>D</Text>
          </View>
        </View>
      </View>
    );
  }
}
