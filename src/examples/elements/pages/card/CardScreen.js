
import React, {Component} from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Image,
  ScrollView,
} from 'react-native';

import {
  Card,
  ListItem,
  Button,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'thot leader',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'jsa',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'andy vitable',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'katy friendson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
 ]

export default class CardScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  render() {
    return (
      <View style={sheets.container}>
        <ScrollView style={sheets.scrollView}>

          {/* implemented with Text and Button as children */}
          <Card
            title='HELLO WORLD'
            image={require('../../res/pic2.jpg')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              icon={{name: 'code'}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>

          {/* implemented without image without header, using ListItem component */}
          <Card containerStyle={{padding: 0}} >
            {
              users.map((u, i) => {
                return (
                  <ListItem
                    key={i}
                    roundAvatar
                    title={u.name}
                    avatar={{uri:u.avatar}}
                  />
                );
              })
            }
          </Card>

          {/* implemented without image with header */}
          <Card title="CARD WITH DIVIDER">
            {
              users.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: u.avatar }}
                    />
                    <Text style={styles.name}>{u.name}</Text>
                  </View>
                );
              })
            }
          </Card>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  user: {
    width: 320,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
    marginVertical: 8,
  },
  name: {
    marginLeft: 8,
    color: 'black',
    fontSize: 16,
  }
})
