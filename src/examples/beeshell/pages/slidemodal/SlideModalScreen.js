
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

import {
  SlideModal,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class SlideModalScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity
          onPress={() => {
            this._slideModal.open();
          }}>
          <Text>基础用法</Text>
        </TouchableOpacity>

        <SlideModal
          ref={(c) => { this._slideModal = c; }}
          cancelable={true}
        >
          <View>
            <Text>ref 获取组件实例</Text>
            <Text>
              cancelable={'{'}true{'}'}
              点击蒙层消
            </Text>
          </View>
        </SlideModal>
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
