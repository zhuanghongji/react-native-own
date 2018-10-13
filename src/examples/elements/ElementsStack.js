import {
  createStackNavigator,
} from 'react-navigation'

import MainScreen from './pages/main/MainScreen'
import AvatarScreen from './pages/avatar/AvatarScreen'

import colors from '../../styles/colors'

const ElementsStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Avatar: {
      screen: AvatarScreen,
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

export default ElementsStack