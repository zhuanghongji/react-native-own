
import React, {Component} from 'react';
import {
  StyleSheet, 
  View,
  ScrollView,
  FlatList,
} from 'react-native';

import sheets from '../../../../styles/sheets'
import dimensions from '../../../../styles/dimensions'

import Button from '../../../../components/button/Button'

const components = [
  { name: 'Avatar' },
  { name: 'Badge' },
  { name: 'Button' },
  { name: 'ButtonGroup' },
  { name: 'Card' },
  { name: 'CheckBox' },
  { name: 'Divider' },
  { name: 'Forms' },
  { name: 'Header' },
  { name: 'Icon' },
  { name: 'Lists' },
  { name: 'Pricing' },
  { name: 'Rating' },
  { name: 'SearchBar' },
  { name: 'Slider' },
  { name: 'SocialIcon' },
  { name: 'Text' },
  { name: 'Tile' },
]

export default class ElementsMainScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Elements",
  })

  renderComponentButton(navigation, item, index) {
    const name = item.name
    let style = {
      // width: 128,
      marginTop: index === 0 ? 16 : 0,
      marginBottom: 16,
      marginHorizontal: 16,
    }
    return (
      <Button
        style={style}
        title={name}
        key={name}
        onPress={() => {
          navigation.navigate(name, { name })
        }}
      />
    )
  }

  render() {
    let { navigation } = this.props
    return (
      <View style={sheets.container}>
        <FlatList
          style={styles.flatList}
          data={components}
          renderItem={({ item, index }) => 
            this.renderComponentButton(navigation, item, index)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flatList: {
    flex: 1,
    width: dimensions.screenWidth,
  },
});
