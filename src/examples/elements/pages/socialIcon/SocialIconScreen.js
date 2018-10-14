
import React, {Component} from 'react';
import { 
  View,
} from 'react-native';

import {
  SocialIcon,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

export default class SocialIconScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={sheets.container}>

       {/* Icon */}
        <SocialIcon
          type='twitter'
        />

        <SocialIcon
          raised={false}
          type='gitlab'
        />

        <SocialIcon
          light
          type='medium'
        />

        <SocialIcon
          light
          raised={false}
          type='medium'
        />

        {/* Button */}
        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
        />

        <SocialIcon
          title='Some Twitter Message'
          button
          type='twitter'
        />

        <SocialIcon
          button
          type='medium'
        />

        <SocialIcon
          button
          light
          type='instagram'
        />

      </View>
    );
  }
}
