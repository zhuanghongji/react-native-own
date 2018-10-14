import {
  createStackNavigator,
} from 'react-navigation'

import colors from '../../styles/colors'

import MainScreen from './pages/main/MainScreen'

import AvatarScreen from './pages/avatar/AvatarScreen'
import BadgeScreen from './pages/badge/BadgeScreen'
import ButtonScreen from './pages/button/ButtonScreen'
import ButtonGroupScreen from './pages/buttongroup/ButtonGroupScreen'
import CardScreen from './pages/card/CardScreen'
import CheckBoxScreen from './pages/checkbox/CheckBoxScreen'
import DividerScreen from './pages/divider/DividerScreen'
import FormsScreen from './pages/forms/FormsScreen'
import HeaderScreen from './pages/header/HeaderScreen'
import IconScreen from './pages/icon/IconScreen'
import ListsScreen from './pages/lists/ListsScreen'
import PricingScreen from './pages/pricing/PricingScreen'
import RatingScreen from './pages/rating/RatingScreen'
import SearchBarScreen from './pages/searchbar/SearchBarScreen'
import SliderScreen from './pages/slider/SliderScreen'
import SocialIconScreen from './pages/socialIcon/SocialIconScreen'
import TextScreen from './pages/text/TextScreen'
import TileScreen from './pages/tile/TileScreen'

const ElementsStack = createStackNavigator(
  {
    Main: MainScreen,
    Avatar: AvatarScreen,
    Badge: BadgeScreen,
    Button: ButtonScreen,
    ButtonGroup: ButtonGroupScreen,
    Card: CardScreen,
    CheckBox: CheckBoxScreen,
    Divider: DividerScreen,
    Forms: FormsScreen,
    Header: HeaderScreen,
    Icon: IconScreen,
    Lists: ListsScreen,
    Pricing: PricingScreen,
    Rating: RatingScreen,
    SearchBar: SearchBarScreen,
    Slider: SliderScreen,
    SocialIcon: SocialIconScreen,
    Text: TextScreen,
    Tile: TileScreen,
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