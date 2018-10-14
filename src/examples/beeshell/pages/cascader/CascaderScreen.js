
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView,
} from 'react-native';

import {
  Cascader,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class CascaderScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  state = {
    options:[
      {
        label: '甜点饮品',
        value: 19,
        children: [
          { label: '甜品', value: 167 },
          { label: '咖啡', value: 168 },
          { label: 'icecream', value: 169 },
        ],
      },
      {
        label: '美食',
        value: 22,
        children: [
          {
            label: '火锅',
            value: 221,
            children: [
              { label: '四川火锅', value: 500 },
              { label: '云南火锅', value: 501 },
              { label: '羊蝎子火锅', value: 502 },
            ],
          },
          {
            label: '面',
            value: 112,
            children: [
              { label: '重庆小面', value: 600 },
              { label: '山西刀削面', value: 701 },
            ],
          },
        ],
      }
    ],
    assignedOption: [22, 112, 600] // 默认选中
  }

  handleConfirm(selectedChain){
    const content = selectedChain.map(item => item.label).join('/');
  }

  render() {
    return (
      <View style={styles.container} >
        <Cascader
          options={this.state.options}
          assignedOption={this.state.assignedOption}
          onConfirm={this.handleConfirm.bind(this)}
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
