
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Imagepicker,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class ImagepickerScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    const configs = {
      title: '上传图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '从图库上传',
      maxWidth: 1600,
      maxHeight: 1200,
      isAllowCrop: true,
      isAllowRotate: true,
      aspectX: 4,
      aspectY: 3,
      quality: 1,

      customButtons: {
          delImage: {
              title: '删除',
              position: 'top',
              brandColor: 'brandWarning',
          },
      },

      responseFileType: 'base64',

      callback(res) {
          console.log(res);
      },

      onCustomButtonPress(btn) {
          console.log(btn);
      }
    }
    
    return (
      <View style={styles.container} >
        <View>
          <TouchableOpacity
            onPress={() => {
                this._imagepicker.open();
            }}
          >
            <Text>基础用法</Text>
          </TouchableOpacity>

          <Imagepicker
            ref={(c) => {
                this._imagepicker = c;
            }}
            {...configs}
          >
            </Imagepicker>
          </View>
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
