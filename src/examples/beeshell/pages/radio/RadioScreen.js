
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView,
} from 'react-native';

import {
  Button,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class RadioScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={styles.container} >
        <Button type="primary" size="md" responsive={false}>首选项 primary</Button>

        <Button type="primary" size="md" responsive={false}>
          <View>
            <Text>自定义</Text>
            <Text>支持组件</Text>
          </View>
        </Button>
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
