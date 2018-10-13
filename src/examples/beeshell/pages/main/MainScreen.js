
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

import sheets from '../../../../styles/sheets'

export default class BeeshellMainScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Beeshell",
  })

  render() {
    return (
      <View style={sheets.container}>
        <Text style={styles.welcome}>beeshell</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
