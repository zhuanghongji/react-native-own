
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView,
} from 'react-native';

import {
  Scrollpicker,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class ScrollpickerScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    const list = [
      [{ label: '第一列第一项', value: 1 }, '第一列第二项', '第一列第三项'],
      ['第二列第一项', '第二列第二项', '第二列第三项'],
      ['第三列第一项', '第三列第二项', '第三列第三项'],
    ]
    const proportion = [3, 1, 1];
    const value = [1, 2, 1];
    
    return (
      <View style={styles.container} >
        <Scrollpicker
          list={list}
          value={value}
          proportion={proportion}
          onChange={(columnIndex, rowIndex) => {
            console.log(columnIndex, rowIndex);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
});
