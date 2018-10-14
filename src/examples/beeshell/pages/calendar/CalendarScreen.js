
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView,
} from 'react-native';

import {
  Calendar,
  Button,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class CalenderScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  state = {
    date: '2018-10-12'
  }

  renderItem = (item, date) => {
    return (
    	<Text>
      	{ item.dateModel.format('DD') }
      </Text>
    )
  }

  renderHeader = (date, changeDate) => {
    return (
      <View>
        <Button onPress={() => changeDate('month', 'subtract')}>
          -
        </Button>
      	<Text>
          { date.format('YYYY年MM月DD日') }
        </Text>
        <Button onPress={() => changeDate('month', 'add')}>
          +
        </Button>
      </View>
    )
  }

	renderWeekDay = (weekday) => ( <Text>周{weekday}</Text>	 )

  render() {
    return (
      <View style={styles.container} >
        {/* <View style={{flex: 1, backgroundColor: 'grey'}}>
            <Text>{this.state.date}</Text>
            <View style={{marginVertical: 50}} >
              <Calendar
                date={this.state.date}
                startDate={'2018-04-11'}
                endDate={'2018-06-22'}
                onChange={(date) => {
                    this.setState({
                        date
                    });
                }}>
              </Calendar>
            </View>
          </View> */}
        <View style={{flex: 1, backgroundColor: '#ebebea'}}>
              <Text>{this.state.date}</Text>
              <View style={{marginVertical: 50}} >
                  <Calendar
                      date={this.state.date}
                      startDate={'2018-04-11'}
                      endDate={'2018-06-22'}
                      onChange={(date) => {
                          this.setState({
                              date
                          });
                      }}
                    	renderItem={this.renderItem}
                    	renderHeader={this.renderHeader}
                    	renderWeekDay={this.renderWeekDay}
                    >
                  </Calendar>
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
