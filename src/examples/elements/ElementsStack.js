import {
  createStackNavigator,
} from 'react-navigation'

import colors from '../../styles/colors'

import MainScreen from './pages/main/MainScreen'
import AvatarScreen from './pages/avatar/AvatarScreen'
import BadgeScreen from './pages/badge/BadgeScreen'

const ElementsStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Avatar: {
      screen: AvatarScreen,
    },
    Badge: {
      screen: BadgeScreen,
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