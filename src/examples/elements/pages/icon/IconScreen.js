
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableNative,
} from 'react-native';

import {
  Icon,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

export default class IconScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={sheets.container}>

        <Icon
          name='rowing' />

        <Icon
          name='g-translate'
          color='#00aced' />

        <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
        />

        <Icon
          reverse
          name='ios-american-football'
          type='ionicon'
          color='#517fa4'
        />

        <Icon
          raised
          name='heartbeat'
          type='font-awesome'
          color='#f50'
          onPress={() => console.log('hello')} />
      
      </View>
    );
  }
}
