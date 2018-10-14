import {
  Dimensions, 
  Platform, 
  PixelRatio,
} from 'react-native'

const { 
  width: screenWidth, 
  height: screenHeight, 
} = Dimensions.get('window');

/**
 * iOS 屏幕坐标是包含状态栏的，所以我们在 iOS 环境下运行一个组件它会在状态栏下绘制，即会和状态栏重叠;
 * 而 Android 则不会，它会在状态栏下边开始绘制！
 */
export default {
  screenWidth,
  screenHeight,
  onePixel: 1 / PixelRatio.get(),
  statusbarHeight: (Platform.OS === 'ios' ? 20 : 0),
}