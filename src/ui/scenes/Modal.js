import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import {
  StyleSheet,
  View
} from 'react-native'

export default class Modal extends Component {

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
    backgroundColor: '#0091ea'
  }
})
