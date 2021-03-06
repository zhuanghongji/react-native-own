
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableNative,
} from 'react-native';

import {
  Divider,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

export default class DividerScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={sheets.container}>

        <Divider style={{ width: 256, height: 12, backgroundColor: 'blue' }} />
      
      </View>
    );
  }
}
