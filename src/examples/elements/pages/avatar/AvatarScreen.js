
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

export default class AvatarScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Avatar",
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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
        >
          {this.renderSources()}
          {this.renderTitles()}
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
