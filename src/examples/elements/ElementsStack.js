import {
  createStackNavigator,
} from 'react-navigation'

import MainScreen from './pages/main/MainScreen'

const ElementsStack = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
})

export default ElementsStack