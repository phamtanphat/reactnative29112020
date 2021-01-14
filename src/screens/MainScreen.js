import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class MainScreen extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export const showInFo = () => {
  console.log('Main Screen');
};

// export default : export dang class
// export : export nhìu , khi import bản chất là 1 object 
// và không thay đổi tên của đối tượng export
