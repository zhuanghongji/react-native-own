
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

export default class RatingScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={sheets.container}>


      
      </View>
    );
  }
}
