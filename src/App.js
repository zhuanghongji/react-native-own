
import React, {Component} from 'react';
import {
  Image,
} from 'react-native';

import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import colors from './styles/colors'

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
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        if (routeName === 'Own') {
          icon = focused ? require('./assets/icons/o_active.png') : require('./assets/icons/o_inactive.png');
        } else if (routeName === 'Antd') {
          icon = focused ? require('./assets/icons/a_active.png') : require('./assets/icons/a_inactive.png');
        } else if (routeName === 'Beeshell') {
          icon = focused ? require('./assets/icons/b_active.png') : require('./assets/icons/b_inactive.png');
        } else if (routeName === 'Elements') {
          icon = focused ? require('./assets/icons/e_active.png') : require('./assets/icons/e_inactive.png');
        } else if (routeName === 'NativeBase') {
          icon = focused ? require('./assets/icons/n_active.png') : require('./assets/icons/n_inactive.png');
        }
        return <Image style={{ width: 18, height: 18 }} source={icon} />
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.minor,
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

