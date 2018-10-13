import {
  createStackNavigator,
} from 'react-navigation'

import MainScreen from './pages/main/MainScreen'

const OwnStack = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
})

export default OwnStack