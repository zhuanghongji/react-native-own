
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Button,
} from 'react-native';

import sheets from '../../../../styles/sheets'

export default class ElementsMainScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Elements",
  })

  render() {
    let { navigation } = this.props
    return (
      <View style={sheets.container}>
        <Text style={styles.welcome}>elements</Text>
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
