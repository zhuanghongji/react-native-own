
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import PropTypes from 'prop-types'
import colors from '../../styles/colors'

/**
 * 自定义按钮
 * 
 * 相对 RN 提供的 Button 来说，样式更加可控，并且在两个平台样式一致。
 */
export default class Button extends Component {

  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    title: 'Button',
    onPress: undefined,
  }

  render() {
    let { style, title, onPress } = this.props
    return (
      <TouchableOpacity 
        style={[styles.touchable, (style ? style : null)]}
        activeOpacity={0.6}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  touchable: {
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 4,
    backgroundColor: colors.accent,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  }
})

