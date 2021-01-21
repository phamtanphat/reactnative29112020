/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

// re-render
export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count >= 5) {
      return false;
    }
    return true;
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
          Count : {this.state.count}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            onPress={() => {
              this.setState({count: this.state.count + 1}, () => {
                console.log(this.state.count);
              });
            }}
            style={{backgroundColor: 'green', padding: 10, borderRadius: 5}}>
            <Text>Increase</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({count: this.state.count - 1});
            }}
            style={{backgroundColor: 'red', padding: 10, borderRadius: 5}}>
            <Text>Decrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({count: 0});
            }}
            style={{backgroundColor: 'yellow', padding: 10, borderRadius: 5}}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
