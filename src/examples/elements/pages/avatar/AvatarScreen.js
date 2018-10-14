
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView,
} from 'react-native';

import {
  Avatar,
} from 'react-native-elements'

import sheets from '../../../../styles/sheets'

export default class AvatarScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  renderSources() {
    return (
      <ScrollView
        style={styles.scrollViewHorizontal}
        horizontal={true}
      >
        <Avatar
          size="small"
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Avatar
          size="medium"
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Avatar
          size="large"
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Avatar
          size="xlarge"
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      </ScrollView>
    )
  }

  renderTitles() {
    return (
      <ScrollView
        style={styles.scrollViewHorizontal}
        horizontal={true}
      >
        <Avatar
          size="small"
          rounded
          title="MT"
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Avatar
          size="medium"
          title="BP"
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Avatar
          size="large"
          title="LW"
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Avatar
          size="xlarge"
          rounded
          title="CR"
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      </ScrollView>
    )
  }

  renderIcons() {
    return (
      <ScrollView
        style={styles.scrollViewHorizontal}
        horizontal={true}
      >
        <Avatar
          small
          rounded
          icon={{name: 'user', type: 'font-awesome'}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
        />
        <Avatar
          medium
          overlayContainerStyle={{backgroundColor: 'blue'}}
          icon={{name: 'meetup', color: 'red', type: 'font-awesome'}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{flex: 3, marginTop: 100}}
        />
        <Avatar
          large
          icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
          overlayContainerStyle={{backgroundColor: 'white'}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{flex: 4, marginTop: 75}}
        />
        <Avatar
          xlarge
          rounded
          icon={{name: 'home', type: 'font-awesome'}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{flex: 5, marginRight: 60}}
        />
      </ScrollView>
    )
  }

  render() {
    return (
      <View style={sheets.container}>
        <ScrollView style={sheets.scrollView} >
          {this.renderSources()}
          {this.renderTitles()}
          {this.renderIcons()}
        </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  scrollViewHorizontal: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
