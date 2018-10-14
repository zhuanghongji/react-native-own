
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

import {
  ConfirmModal,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class ConfirmModalScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity
          onPress={() => {
            this._confirmModal.open();
          }}>
          <Text>包含标题，确认、取消按钮</Text>
        </TouchableOpacity>

        <ConfirmModal
          ref={(c) => { this._confirmModal = c; }}
          title="是否退出编辑？"
          body="只提供简单文案"
          cancelable={false}
          cancelCallback={() => {
            console.log('cancel');
          }}
          confirmCallback={() => {
            console.log('confirm');
          }}>
        </ConfirmModal>
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
