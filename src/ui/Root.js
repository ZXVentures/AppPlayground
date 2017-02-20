/* @flow */

import React from 'react' // eslint-disable-line no-unused-vars
import { Platform } from 'react-native'

import { StackNavigator } from 'react-navigation'

import MainNavigator from './nav/navigators/MainNavigator'
import ModalNavigator from './nav/navigators/ModalNavigator'

export default StackNavigator(
  {
    Main: {
      screen: MainNavigator,
      path: ''
    },
    Modal: {
      screen: ModalNavigator
    }
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none'
  }
)
