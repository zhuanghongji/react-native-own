
import React, {Component} from 'react';
import {
  View,
} from 'react-native';

import {
  Rating,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

export default class RatingScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    const WATER_IMAGE = require('../../res/high_five.png')
    return (
      <View style={sheets.container}>
        <Rating
          showRating
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />

        <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={3.6}
          readonly
          imageSize={40}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />

        <Rating
          type="heart"
          ratingCount={3}
          fractions={2}
          startingValue={1.57}
          imageSize={40}
          onFinishRating={this.ratingCompleted}
          showRating
          style={{ paddingVertical: 10 }}
        />

        <Rating
          type='custom'
          ratingImage={WATER_IMAGE}
          ratingColor='#3498db'
          ratingBackgroundColor='#c8c7c8'
          ratingCount={10}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />
      
      </View>
    );
  }
}
