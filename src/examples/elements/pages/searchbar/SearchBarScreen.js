
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableNative,
} from 'react-native';

import {
  SearchBar,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'
import dimensions from '../../../../styles/dimensions'

export default class SearchBarScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  someMethod = (text) => {
    console.log(text)
  }

  render() {
    return (
      <View style={sheets.container}>

        <SearchBar
          style={styles.searchBar}
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          placeholder='Type Here...' />

        <SearchBar
          noIcon
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          placeholder='Type Here...' />

        <SearchBar
          round
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          placeholder='Type Here...' />

        <SearchBar
          lightTheme
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          placeholder='Type Here...' />

        <SearchBar
          lightTheme
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Type Here...' />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    // width: dimensions.screenWidth
  }
})
