/* @flow */

import React from 'react' // eslint-disable-line no-unused-vars
import { Platform } from 'react-native'

import { StackNavigator } from 'react-navigation'

import Home from './scenes/Home'
import Left from './scenes/Left'
import Modal from './scenes/Modal'
import Right from './scenes/Right'

export default StackNavigator(
  // RouteConfigs
  {
    Home: {
      screen: Home,
      path: ''
    },
    Left: {
      screen: Left,
      path: 'left'
    },
    Modal: {
      screen: Modal,
      path: 'modal'
    },
    Right: {
      screen: Right,
      path: 'right'
    }
  },
  // StackNavigatorConfig
  {
    initialRouteName: 'Home',
    mode: 'card',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen'
  }
)
