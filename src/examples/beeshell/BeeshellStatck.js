import {
  createStackNavigator,
} from 'react-navigation'

import MainScreen from './pages/main/MainScreen'
import ButtonScreen from './pages/button/ButtonScreen'
import TabScreen from './pages/tab/TabScreen'

const BeeshellStack = createStackNavigator(
  {
    Main: MainScreen,
    Button: ButtonScreen,
    Tab: TabScreen,
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

export default BeeshellStack