
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Actionsheet,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class ActionSheetScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity
          onPress={() => {
            this._actionSheet.open();
          }}>
          <Text>Actionsheet</Text>
        </TouchableOpacity>

        <Actionsheet
          ref={(c) => { this._actionSheet = c; }}
          title="选择品类"
          textKey="text"
          options={[
            { text: '选项1', value: '1' },
            { text: '选项2', value: '2',},
            { text: '选项3', value: '3' },
          ]}
          cancelable={false}
          confirmCallback={(item) => {
              console.log('confirm');
          }}
          cancelCallback={() => {
              console.log('cancel')
          }}>
        </Actionsheet>
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
