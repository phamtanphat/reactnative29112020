/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import axios from 'axios';

export default class App extends Component {
  componentDidMount() {
    const url = 'https://servernode29122020.herokuapp.com/word';
    const params = new URLSearchParams();
    params.append('en', 'Four');
    params.append('vn', 'Bốn');

    axios
      .post(url, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </SafeAreaView>
    );
  }
}
