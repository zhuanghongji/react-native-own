
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView,
} from 'react-native';

import {
  Radio,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class RadioScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  state = {
    deliveryTime: '3',
  }

  render() {
    return (
      <View style={styles.container} >
        <Radio checkedValue={this.state.deliveryTime} onChange={() => {}}>
          <Radio.Item key={'a'} label="百度" trueValue="1" />
          <Radio.Item key={'b'} label="阿里" trueValue="2" />
          <Radio.Item key={'c'} label="腾讯" trueValue="3" />
        </Radio>
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
