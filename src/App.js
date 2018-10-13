
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import OwnStack from './examples/own/OwnStack'
import AntdStatck from './examples/antd/AntdStatck'
import BeeshellStatck from './examples/beeshell/BeeshellStatck'
import ElementsStack from './examples/elements/ElementsStack'
import NativeBaseStack from './examples/nativebase/NativeBaseStack'

const MainTabNavigator = createBottomTabNavigator(
  {
    Own: {
      screen: OwnStack,
    },
    Antd: {
      screen: AntdStatck,
    },
    Beeshell: {
      screen: BeeshellStatck,
    },
    Elements: {
      screen: ElementsStack,
    },
    NativeBase: {
      screen: NativeBaseStack,
    },
  }
)

export default class App extends Component {
  render() {
    return (
      <MainTabNavigator />
    );
  }
}

