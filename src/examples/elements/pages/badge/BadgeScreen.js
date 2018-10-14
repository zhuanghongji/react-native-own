
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableNative,
} from 'react-native';

import {
  Badge,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

export default class BadgeScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Badge",
  })

  render() {
    let image = (
      <Image 
        style={{width: 48, height: 48}}
        source={require('../../res/high_five.png')} 
      />
    )
    return (
      <View style={sheets.container}>
        <Badge
          value={3}
          textStyle={{ color: 'orange' }}
        />

        <Badge 
          containerStyle={{ backgroundColor: 'violet'}}
        >
          <Text>User 1</Text>
        </Badge>

        <Badge 
          containerStyle={{ backgroundColor: 'violet'}}
        >
          <Text>User A</Text>
          <Text>User B</Text>
        </Badge>

        <Badge 
          value="5"
          onPress={() => { alert('pressed') }}  
        />

        <Badge 
          value={10}
          component={TouchableNative}  
        />

        {/* Invariant Violation: expected a string (for built-in comonents) 
          or class/function (composite components) but got: object. */}
        {/* <Badge 
          value={10}
          component={image}  
        /> */}

        <Image 
          style={{width: 48, height: 48}}
          source={require('../../res/high_five.png')} />
      
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   badge: {
//     margin: 4,
//   },
// });
