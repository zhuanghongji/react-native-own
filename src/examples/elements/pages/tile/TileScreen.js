
import React, {Component} from 'react';
import {
  View,
} from 'react-native';

import {
  Tile,
  Text,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

export default class TileScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={sheets.container}>
        <Tile
          imageSrc={require('../../res/path.png')}
          title="Lorem ipsum dolor sit amet, consectetur"
          icon={{ name: 'play-circle', type: 'font-awesome' }} 
          contentContainerStyle={{ height: 70 }}
        >
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text>Caption</Text>
            <Text>Caption</Text>
          </View>
        </Tile>
      </View>
    );
  }
}
