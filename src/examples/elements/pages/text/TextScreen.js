
import React, {Component} from 'react';
import {
  View,
} from 'react-native';

import {
  Text,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

export default class TextScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={sheets.container}>
        <Text h1>Heading 1</Text>
        <Text h2>Heading 2</Text>
        <Text h3>Heading 3</Text>
        <Text h4>Heading 4</Text>
      </View>
    );
  }
}
