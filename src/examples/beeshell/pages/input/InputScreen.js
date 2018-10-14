
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView,
} from 'react-native';

import {
  Input,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class InputScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  state = {
    name: ''
  }

  render() {
    return (
      <View style={styles.container} >
        <Input
          placeholder="请输入姓名"
          textAlign="left"
          value={this.state.name}
          onChange={() => {}}
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
