
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

import sheets from '../../../../styles/sheets'
import Button from '../../../../components/button/Button'

export default class ElementsMainScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Elements",
  })

  render() {
    let { navigation } = this.props
    return (
      <View style={sheets.container}>

        <Button
          style={sheets.button}
          title="Avatar"
          onPress={() => {
            navigation.navigate('Avatar')
          }}
        />

        <Button
          style={sheets.button}
          title="Badge"
          onPress={() => {
            navigation.navigate('Badge')
          }}
        />

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
