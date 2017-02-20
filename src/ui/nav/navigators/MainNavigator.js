/* @flow */

import React from 'react' // eslint-disable-line no-unused-vars
import { Platform } from 'react-native'

import { StackNavigator } from 'react-navigation'

import Home from '../../scenes/Home'
import Left from '../../scenes/Left'
import Right from '../../scenes/Right'

export default StackNavigator(
  {
    Home: {
      screen: Home,
      path: ''
    },
    Left: {
      screen: Left,
      path: 'left'
    },
    Right: {
      screen: Right,
      path: 'right'
    }
  },
  {
    initialRouteName: 'Home',
    mode: 'card',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen'
  }
)
