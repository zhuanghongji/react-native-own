import {
  StyleSheet,
  Dimensions,
} from 'react-native'

const { 
  width: screenWidth, 
  height: screenHeight,
} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    flex: 1,
  },
})