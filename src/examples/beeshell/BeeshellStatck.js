import {
  createStackNavigator,
} from 'react-navigation'

import MainScreen from './pages/main/MainScreen'

import ActionSheetScreen from './pages/actionsheet/ActionSheetScreen'
import ButtonScreen from './pages/button/ButtonScreen'
import CalendarScreen from './pages/calendar/CalendarScreen'
import CascaderScreen from './pages/cascader/CascaderScreen'
import CheckboxScreen from './pages/checkbox/CheckboxScreen'
import ConfirmModalScreen from './pages/confirmmodal/ConfirmModalScreen'
import DatepickerScreen from './pages/datepicker/DatepickerScreen'
import DatepickerUpScreen from './pages/datepickerup/DatepickerUpScreen'
import FilterPanelScreen from './pages/filterpanel/FilterPanelScreen'
import FormScreen from './pages/form/FormScreen'
import ImagepickerScreen from './pages/imagepicker/ImagepickerScreen'
import InputScreen from './pages/input/InputScreen'
import LongListScreen from './pages/longlist/LongListScreen'
import ModalScreen from './pages/modal/ModalScreen'
import PageModalScreen from './pages/pagemodal/PageModalScreen'
import RadioScreen from './pages/radio/RadioScreen'
import ScrollpickerScreen from './pages/scrollpicker/ScrollpickerScreen'
import SelectPanelScreen from './pages/selectpanel/SelectPanelScreen'
import SlideModalScreen from './pages/slidemodal/SlideModalScreen'
import TabScreen from './pages/tab/TabScreen'
import TipScreen from './pages/tip/TipScreen'

const BeeshellStack = createStackNavigator(
  {
    Main: MainScreen,
    ActionSheet: ActionSheetScreen,
    Button: ButtonScreen,
    Calendar: CalendarScreen,
    Cascader: CascaderScreen,
    Checkbox: CheckboxScreen,
    ConfirmModal: ConfirmModalScreen,
    Datepicker: DatepickerScreen,
    DatepickerUp: DatepickerUpScreen,
    FilterPanel: FilterPanelScreen,
    Form: FormScreen,
    Imagepicker: ImagepickerScreen,
    Input: InputScreen,
    LongList: LongListScreen,
    Modal: ModalScreen,
    PageModal: PageModalScreen,
    Radio: RadioScreen,
    Scrollpicker: ScrollpickerScreen,
    SelectPanel: SelectPanelScreen,
    SlideModal: SlideModalScreen,
    Tab: TabScreen,
    Tip: TipScreen,
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