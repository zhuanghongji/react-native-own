
import React, {Component} from 'react';
import {
  Text, 
  View,
} from 'react-native';

import {
  Slider,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

export default class SliderScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  state = {
    value: 36,
  }

  render() {
    return (
      <View style={sheets.container}>
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
          <Slider
            value={this.state.value}
            onValueChange={(value) => this.setState({value})} />
          <Text>Value: {this.state.value}</Text>
        </View>
      </View>
    );
  }
}
