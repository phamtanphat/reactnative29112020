/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {getWidth, getHeight} from '../helpers/AppDimension';
import RNPickerSelect from 'react-native-picker-select';
import Word from '../components/Word';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {id: 1, en: 'One', vn: 'Một', isMemorized: false},
        {id: 2, en: 'Two', vn: 'Hai', isMemorized: true},
        {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
        {id: 4, en: 'Four', vn: 'Bốn', isMemorized: false},
        {id: 5, en: 'Five', vn: 'Năm', isMemorized: false},
      ].reverse(),
      shouldShowForm: false,
      txtEn: '',
      txtVn: '',
      filterMode: 'Show_All',
    };
  }
  toggleWord = (item) => {
    const newWords = this.state.words.map((word) => {
      if (word.id === item.id) {
        return {...word, isMemorized: !item.isMemorized};
      }
      return word;
    });
    this.setState({words: newWords});
  };
  removeWord = (item) => {
    const newWords = this.state.words.filter((word) => {
      if (word.id === item.id) {
        return false;
      }
      return true;
    });
    this.setState({words: newWords});
  };
  toggleForm = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  };
  addWord = () => {
    const {txtEn, txtVn} = this.state;
    if (txtEn.length <= 0 || txtVn.length <= 0) {
      alert('Bạn chưa nhập đủ thông tin');
      return;
    }
    const newWord = {
      id: this.state.words.length + 1,
      en: txtEn,
      vn: txtVn,
      isMemorized: false,
    };
    const newWords = Object.assign([], this.state.words);
    newWords.unshift(newWord);
    this.setState({words: newWords}, () => {
      this.textInputEn.clear();
      this.textInputVn.clear();
    });
  };

  renderForm = () => {
    if (this.state.shouldShowForm) {
      return (
        <View>
          <View style={styles.containerTextInput}>
            <TextInput
              onChangeText={(text) => (this.state.txtEn = text)}
              placeholder="English"
              style={styles.textInput}
              ref={(refs) => (this.textInputEn = refs)}
            />
            <TextInput
              onChangeText={(text) => (this.state.txtVn = text)}
              placeholder="Vietnamese"
              style={styles.textInput}
              ref={(refs) => (this.textInputVn = refs)}
            />
          </View>
          <View style={styles.containerTouchable}>
            <TouchableOpacity
              onPress={this.addWord}
              style={styles.touchableAddword}>
              <Text style={styles.textTouchable}>Add word</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.toggleForm}
              style={styles.touchableCancel}>
              <Text style={styles.textTouchable}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={this.toggleForm}
          style={styles.buttonOpenForm}>
          <Text style={styles.textOpenForm}>+</Text>
        </TouchableOpacity>
      );
    }
  };
  renderFilter = () => {
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          value={this.state.filterMode}
          onValueChange={(value) => this.setState({filterMode: value})}
          items={[
            {label: 'Show All', value: 'Show_All'},
            {label: 'Show Forgot', value: 'Show_Forgot'},
            {label: 'Show Memorized', value: 'Show_Memorized'},
          ]}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderForm()}
        {this.renderFilter()}
        <Word words={this.state.words} filterMode={this.state.filterMode}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  groupWord: {
    height: 100,
    backgroundColor: 'gainsboro',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  groupHorizontal: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textEn: {
    color: 'green',
    fontWeight: '500',
    fontSize: getWidth() / 22,
  },
  textVn: {
    color: 'red',
    fontWeight: '500',
    fontSize: getWidth() / 22,
  },
  buttonMemorize: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonRemove: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
  },
  textMemorize: {
    color: 'white',
    fontSize: getWidth() / 22,
  },
  textRemove: {
    color: 'darkblue',
    fontSize: getWidth() / 22,
  },
  itemSeparator: {
    height: 5,
  },
  containerTextInput: {
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
  },
  textInput: {
    borderWidth: 1,
    height: 60,
    fontSize: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  touchableAddword: {
    backgroundColor: '#218838',
    padding: 15,
    borderRadius: 10,
  },
  textTouchable: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  touchableCancel: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  buttonOpenForm: {
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#45B157',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOpenForm: {
    color: 'white',
    fontSize: 30,
  },
  containerTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  pickerStyle: {
    padding: 50,
  },
});
