
import React, {Component} from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import {
  List,
  ListItem,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]



export default class ListsScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  renderRow (item){
    return (
      <ListItem
        roundAvatar
        title={item.name}
        subtitle={item.subtitle}
        avatar={{uri:item.avatar_url}}
      />
    )
  }

  render() {
    return (
      <View style={sheets.container}>
        <FlatList
          style={{width: 256, height: 256}}
          data={list}
          renderItem={({ item }) => this.renderRow(item)}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}
