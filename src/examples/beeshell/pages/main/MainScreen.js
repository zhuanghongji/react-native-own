
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  FlatList,
} from 'react-native';

import sheets from '../../../../styles/sheets'
import dimensions from '../../../../styles/dimensions'

import Button from '../../../../components/button/Button'

const components = [
  { name: 'ActionSheet', desc: '选择面板' },
  { name: 'Button', desc: '按钮' },
  { name: 'Calendar', desc: '日历' },
  { name: 'Cascader', desc: '级联菜单' },
  { name: 'Checkbox', desc: '多选' },
  { name: 'ConfirmModal', desc: '包含标题，取消、确认按钮' },
  { name: 'Datepicker', desc: '日期选择' },
  { name: 'DatepickerUp', desc: '日期数据源扩展' },
  { name: 'FilterPanel', desc: '标签筛选组件' },
  { name: 'Form', desc: '表单' },
  { name: 'Imagepicker', desc: '图片选择' },
  { name: 'Input', desc: '输入框' },
  { name: 'LongList', desc: '长列表' },
  { name: 'Modal', desc: '基础弹窗' },
  { name: 'PageModal', desc: '上拉，包含标题以及取消、确认按钮' },
  { name: 'Radio', desc: '单选' },
  { name: 'Scrollpicker', desc: '滚动选择' },
  { name: 'SelectPanel', desc: '下拉选择组件' },
  { name: 'SlideModal', desc: '下拉/上拉' },
  { name: 'Tab', desc: '组件' },
  { name: 'Tip', desc: '提示信息弹窗' },
]

export default class MainScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Beeshell",
  })

  renderComponentButton(navigation, item, index) {
    const { name, desc } = item
    let style = {
      // width: 128,
      marginTop: index === 0 ? 16 : 0,
      marginBottom: 16,
      marginHorizontal: 16,
    }
    return (
      <Button
        style={style}
        title={name}
        desc={desc}
        key={name}
        onPress={() => {
          navigation.navigate(name, { name })
        }}
      />
    )
  }

  render() {
    let { navigation } = this.props
    return (
      <View style={sheets.container}>
        <FlatList
          style={styles.flatList}
          data={components}
          renderItem={({ item, index }) => 
            this.renderComponentButton(navigation, item, index)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flatList: {
    flex: 1,
    width: dimensions.screenWidth,
  },
});
