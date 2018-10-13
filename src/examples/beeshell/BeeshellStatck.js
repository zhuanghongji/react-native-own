import {
  createStackNavigator,
} from 'react-navigation'

import MainScreen from './pages/main/MainScreen'

const BeeshellStack = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
})

export default BeeshellStack