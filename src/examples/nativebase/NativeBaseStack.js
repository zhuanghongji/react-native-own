import {
  createStackNavigator,
} from 'react-navigation'

import MainScreen from './pages/main/MainScreen'

const NativeBaseStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.header,
      },
      headerTintColor: colors.headerTint,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

export default NativeBaseStack