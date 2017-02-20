/* @flow */

import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import {
  StyleSheet,
  View
} from 'react-native'

import IconButton from '../partials/common/IconButton'

export default class Modal extends Component {

  static navigationOptions = {
    title: 'Modal' // TODO: Localization
  }

  render(): React$Element<any> {
    console.log(this.props)
    return (
      <View style={styles.edgeContainer}>
        <View style={styles.edgeContainer}>
          <View style={styles.content}>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <IconButton icon={'times'}
            size={32}
            color={'#eeeeee'}
            onPress={this._goBack.bind(this)}
          />
        </View>
      </View>
    )
  }

  _goBack() {
    this.props.navigation.dispatch({
      type: 'Navigation/BACK'
    })
  }
}

const styles = StyleSheet.create({
  edgeContainer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  iconContainer: {
    left: 0,
    position: 'absolute',
    top: 25
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0091ea'
  }
})
