
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableNative,
} from 'react-native';

import {
  Button,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

export default class ButtonScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={sheets.container}>
        <Button
          title='BUTTON' />

        <Button
          raised
          icon={{name: 'cached'}}
          title='BUTTON WITH ICON' />

        <Button
          large
          rightIcon={{name: 'code'}}
          title='LARGE WITH RIGHT ICON' />

        <Button
          large
          icon={{name: 'envira', type: 'font-awesome'}}
          title='LARGE WITH ICON TYPE' />

        <Button
          large
          icon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
          title='OCTICON' />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  someButtonStyle: {
    // TBD
  }
})