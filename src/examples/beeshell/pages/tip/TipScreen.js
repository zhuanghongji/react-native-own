
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Tip,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class TipScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity
          onPress={() => {
            this._tip.open();
          }}>
          <Text>基础用法</Text>
        </TouchableOpacity>

        <Tip
          ref={(c) => { this._tip = c; }}
          cancelable={true}
          body="默认文案"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
});
