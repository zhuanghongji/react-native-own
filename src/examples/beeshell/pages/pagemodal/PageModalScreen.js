
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

import {
  PageModal,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class PageModalScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity
          onPress={() => {
            this._pageModal.open();
          }}>
          <Text>带头部的底部上拉</Text>
        </TouchableOpacity>

        <PageModal
          ref={(c) => { this._pageModal = c; }}
          title="选择品类"
          cancelable={true}
          cancelCallback={() => {
          }}
          confirmCallback={() => {
          }}>

          <Text>ref 获取组件实例</Text>
          <Text>title="标题"</Text>
          <Text>
            cancelCallback={'{'}() => {'{'}{'}'} {'}'}
            '取消'回调
          </Text>
          <Text>
            confirmCallback={'{'}() => {'{'}{'}'} {'}'}
            '确认'回调
          </Text>
        </PageModal>
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
