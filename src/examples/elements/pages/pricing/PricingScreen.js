
import React, {Component} from 'react';
import {
  View,
} from 'react-native';

import {
  PricingCard,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

export default class PricingScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={sheets.container}>
        <PricingCard
          color='#4f9deb'
          title='Free'
          price='$0'
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
      </View>
    );
  }
}
