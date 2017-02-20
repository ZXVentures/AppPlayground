/* @flow */

import React from 'react' // eslint-disable-line no-unused-vars
import { Platform } from 'react-native'

import { StackNavigator } from 'react-navigation'

import Modal from '../../scenes/Modal'

export default StackNavigator(
  {
    Modal: {
      screen: Modal,
      path: 'modal'
    }
  },
  {
    initialRouteName: 'Modal',
    mode: 'card',
    headerMode: 'none'
  }
)
