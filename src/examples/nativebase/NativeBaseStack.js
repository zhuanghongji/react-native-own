import {
  createStackNavigator,
} from 'react-navigation'

import MainScreen from './pages/main/MainScreen'

const NativeBaseStack = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
})

export default NativeBaseStack