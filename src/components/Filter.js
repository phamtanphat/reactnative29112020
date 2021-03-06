import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMode: 'Show_All',
    };
  }
  render() {
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          value={this.props.filterMode}
          onValueChange={(value) => this.props.setFilterMode(value)}
          items={[
            {label: 'Show All', value: 'Show_All'},
            {label: 'Show Forgot', value: 'Show_Forgot'},
            {label: 'Show Memorized', value: 'Show_Memorized'},
          ]}
        />
      </View>
    );
  }
}

export default connect(null, actionCreators)(Filter);
const styles = StyleSheet.create({
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
