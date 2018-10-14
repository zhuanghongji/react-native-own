
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView,
} from 'react-native';

import {
  Checkbox,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class CheckboxScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  state = {
    deliveryTime: [],
  }

  render() {
    return (
      <View style={styles.container} >
        <Checkbox checkedValues={this.state.deliveryTime} onChange={() => {}}>
          <Checkbox.Item key={'a'} label="百度" trueValue="1" />
          <Checkbox.Item key={'b'} label="阿里" trueValue="2" />
          <Checkbox.Item key={'c'} label="腾讯" trueValue="3" />
        </Checkbox>
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
