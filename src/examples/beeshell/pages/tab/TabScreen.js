
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView,
} from 'react-native';

import {
  Tab,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class TabScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  state = {
      value: 1,
  };

  render() {
    const options = [
      {
          value: 1,
          label: '全部',
      },
      {
          value: 2,
          label: '已完成',
      },
      {
          value: 3,
          label: '未完成',
      }
    ];
    return (
      <View style={sheets.container} >
        <Tab
          value={this.state.value}
          options={options}
          onChange={value => this.setState({ value })}
        />
        <View>
          <Text>
            {this.state.value}
          </Text>
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
