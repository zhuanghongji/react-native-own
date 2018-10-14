import {
  createStackNavigator,
} from 'react-navigation'

import colors from '../../styles/colors'

import MainScreen from './pages/main/MainScreen'

import AvatarScreen from './pages/avatar/AvatarScreen'
import BadgeScreen from './pages/badge/BadgeScreen'
import ButtonScreen from './pages/button/ButtonScreen'

const ElementsStack = createStackNavigator(
  {
    Main: MainScreen,
    Avatar: AvatarScreen,
    Badge: BadgeScreen,
    Button: ButtonScreen,
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