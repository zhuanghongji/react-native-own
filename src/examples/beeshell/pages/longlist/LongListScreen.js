
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView,
} from 'react-native';

import {
  Longlist,
} from 'beeshell'

import sheets from '../../../../styles/sheets'

export default class LongListScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  })

  componentDidMount() {
    this.refreshState(1);
  }

  refreshState = (pageNo) => {
    const params = {
        pageNo: pageNo || 1,
        pagesize: this.state.pagesize,
        id: '123456',
    };

    return this.getList(params).then((resData) => {
        const { data } = resData;

        const list = data.map((item) => {
            return {
                ...item,
                label: `${item.label}--pageNo: ${params.pageNo}`,
            };
        });

        this.setState({
            list: (pageNo == 1 ? [] : this.state.list).concat(list),
        });
    });
  }


  render() {
    const { list } = this.state;
    return (
      <View style={styles.container} >
        <Longlist
          data={list}
          renderItem={({item, index}) => {
              return (<Text>{item.label}</Text>);
          }}
          hasRefreshControl={true}
          onEndReached={this.refreshState}
          onRefresh={this.refreshState}
        />
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
