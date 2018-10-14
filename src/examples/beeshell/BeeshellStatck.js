import {
  createStackNavigator,
} from 'react-navigation'

import MainScreen from './pages/main/MainScreen'

import ActionSheetScreen from './pages/actionsheet/ActionSheetScreen'
import ButtonScreen from './pages/button/ButtonScreen'
import CalenderScreen from './pages/calender/CalenderScreen'
import CascaderScreen from './pages/cascader/CascaderScreen'
import CheckboxScreen from './pages/checkbox/CheckboxScreen'
import ConfirmModalScreen from './pages/confirmmodal/ConfirmModalScreen'
import DatePickerScreen from './pages/datepicker/DatePickerScreen'
import DatePickerUpScreen from './pages/datepickerup/DatePickerUpScreen'
import FilterPanelScreen from './pages/filterpanel/FilterPanelScreen'
import FormScreen from './pages/form/FormScreen'
import ImagePickerScreen from './pages/imagepicker/ImagePickerScreen'
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
    Calender: CalenderScreen,
    Cascader: CascaderScreen,
    Checkbox: CheckboxScreen,
    ConfirmModal: ConfirmModalScreen,
    DatePicker: DatePickerScreen,
    DatePickerUp: DatePickerUpScreen,
    FilterPanel: FilterPanelScreen,
    Form: FormScreen,
    ImagePicker: ImagePickerScreen,
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