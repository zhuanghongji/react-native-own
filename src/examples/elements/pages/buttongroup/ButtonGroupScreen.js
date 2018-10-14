
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableNative,
} from 'react-native';

import {
  ButtonGroup,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

export default class ButtonGroupScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  constructor () {
    super()
    this.state = {
      selectedIndex1: 2,
      selectedIndex2: 2,
    }
    this.updateIndex1 = this.updateIndex1.bind(this)
    this.updateIndex2 = this.updateIndex2.bind(this)
  }
  
  updateIndex1 (selectedIndex1) {
    this.setState({selectedIndex1})
  }

  updateIndex2 (selectedIndex2) {
    this.setState({selectedIndex2})
  }

  render() {
    const buttons1 = ['Hello', 'World', 'Buttons']
    const { selectedIndex1 } = this.state

    const component1 = () => <Text>Hello</Text>
    const component2 = () => <Text>World</Text>
    const component3 = () => <Text>ButtonGroup</Text>
    const buttons2 = [{ element: component1 }, { element: component2 }, { element: component3 }]
    const { selectedIndex2 } = this.state

    return (
      <View style={sheets.container}>

        <ButtonGroup
          onPress={this.updateIndex1}
          selectedIndex={selectedIndex1}
          buttons={buttons1}
          containerStyle={{height: 100}}
        />

        <ButtonGroup
          onPress={this.updateIndex2}
          selectedIndex={selectedIndex2}
          buttons={buttons2}
          containerStyle={{height: 100}} />
      
      </View>
    );
  }
}
