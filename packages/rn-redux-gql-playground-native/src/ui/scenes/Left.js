/* @flow */

import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import {
  StyleSheet,
  View
} from 'react-native'

export default class Left extends Component {

  render(): React$Element<any> {
    return (
      <View style={styles.container}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c51162'
  }
})
