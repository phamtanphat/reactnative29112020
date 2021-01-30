/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ItemWord from './ItemWord';

export default class Word extends PureComponent {
  render() {
    return (
      <FlatList
        data={this.props.words}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item, index}) => (
          <ItemWord
            item={item}
            onRemoveWord={this.props.onRemoveWord}
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
