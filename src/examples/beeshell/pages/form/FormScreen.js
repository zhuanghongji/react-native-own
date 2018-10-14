
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView,
} from 'react-native';

import {
  Form,
  Input,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

const FormItem = Form.FormItem

export default class FormScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={styles.container} >
        {/* <ScrollView> */}
          <Form>
            <FormItem prop="name" label="姓名" hasLine>
              <Input value="" onChange={() => {}} />
            </FormItem>
            <FormItem prop="email" label="邮箱">      
              <Input value="" onChange={() => {}} />
            </FormItem>
          </Form>
        {/* </ScrollView> */}
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
