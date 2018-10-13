
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

import sheets from '../../../../styles/sheets'

export default class MainScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Antd",
  })

  render() {
    return (
      <View style={sheets.container}>
        <Text style={styles.welcome}>antd</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
