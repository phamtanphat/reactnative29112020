/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ItemWord from './ItemWord';

export default class Word extends Component {
  render() {
    return (
      <FlatList
        data={this.props.words}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item, index}) => (
          <ItemWord
            item={item}
            filterMode={this.props.filterMode}
            onToggleWord={this.props.onToggleWord}
          />
        )}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeparator} />;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  itemSeparator: {
    height: 5,
  },
});
