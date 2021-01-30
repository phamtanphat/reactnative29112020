/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {getWidth} from '../helpers/AppDimension';

export default class ItemWord extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.item.isMemorized !== this.props.item.isMemorized) {
      return true;
    }
    if (nextProps.filterMode !== this.props.filterMode){
      return true;
    }
    return false;
  }
  renderItemWord = (item) => {
    const {filterMode} = this.props;
    if (filterMode === 'Show_Forgot' && !item.isMemorized) {
      return null;
    } else if (filterMode === 'Show_Memorized' && item.isMemorized) {
      return null;
    }
    return (
      <View>
        <View style={styles.groupWord}>
          <View style={styles.groupHorizontal}>
            <Text style={styles.textEn}>{item.en}</Text>
            <Text style={styles.textVn}>
              {item.isMemorized ? '----' : item.vn}
            </Text>
          </View>
          <View style={styles.groupHorizontal}>
            <TouchableOpacity
              onPress={() => this.props.onToggleWord(item)}
              style={{
                ...styles.buttonMemorize,
                backgroundColor: item.isMemorized ? 'green' : 'red',
              }}>
              <Text style={styles.textMemorize}>
                {item.isMemorized ? 'Forgot' : 'Memorize'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.onRemoveWord(item)}
              style={styles.buttonRemove}>
              <Text style={styles.textRemove}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  render() {
    console.log('Item Word Render');
    return this.renderItemWord(this.props.item);
  }
}

const styles = StyleSheet.create({
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
});
