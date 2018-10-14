
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView,
} from 'react-native';

import {
  Datepicker,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class DatepickerScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    const date = '2018-01-01';
    return (
      <View style={styles.container} >
        <View style={{flex: 1, backgroundColor: '#ebebea'}}>
          <View style={{marginVertical: 50}} >
            <Datepicker
              startYear={2010}
              numberOfYears={10}
              date={date}
              onChange={(data) => {
                  console.log(data);
              }}
            />
          </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
});
