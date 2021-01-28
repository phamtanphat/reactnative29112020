/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Child from './Child';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: '',
    };
  }
  onIncrease = () => {
    this.setState({count: this.state.count + 1});
  };
  onDecrease = () => {
    this.setState({count: this.state.count - 1});
  };
  onReset = () => {
    this.setState({count: 0});
  };
  onRandomText = () => {
    this.setState({text: Math.random()});
  };
  render() {
    console.log('Box render');
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 30,
            color: 'black',
            marginBottom: 10,
          }}>
          Count : {this.state.count} {'\n'}
          Text : {this.state.text}
        </Text>
        <Child
          onIncrease={this.onIncrease}
          onDecrease={this.onDecrease}
          onReset={this.onReset}
          onRandomText={this.onRandomText}
          text={this.state.text}
        />
      </View>
    );
  }
}
