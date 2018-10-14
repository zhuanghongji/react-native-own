
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableNative,
} from 'react-native';

import {
  CheckBox,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

export default class CheckBoxScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  state = {
    check: false,
  }

  render() {
    return (
      <View style={sheets.container}>

        <CheckBox
          title='Click Here'
          checked={this.state.checked}
        />

        <CheckBox
          center
          title='Click Here'
          checked={this.state.checked}
        />

        <CheckBox
          center
          title='Click Here'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.checked}
        />

        <CheckBox
          center
          title='Click Here to Remove This Item'
          iconRight
          iconType='material'
          checkedIcon='clear'
          uncheckedIcon='add'
          checkedColor='red'
          checked={this.state.checked}
        />
      
      </View>
    );
  }
}
