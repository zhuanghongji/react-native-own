import {
  createStackNavigator,
} from 'react-navigation'

import MainScreen from './pages/main/MainScreen'

const AntdStack = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
})

export default AntdStack