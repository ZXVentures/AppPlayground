/* @flow */

import React, { Component } from 'react' // eslint-disable-line no-unused-vars

import {
  DEFAULT,
  HOME,
  LEFT,
  RIGHT
} from './constants'

import leftHorizontal from './interpolators/leftHorizontal'

import NavButton from '../partials/common/NavButton'

const button = (title: string): () => React$Element<any> => {
  return (): React$Element<any> => (<NavButton title={title} />)
}

export default {
  home: {
    key: HOME,
    title: HOME,
    pushType: DEFAULT,
    leftNavRenderer: button(LEFT),
    rightNavRenderer: button(RIGHT)
  },
  left: {
    key: LEFT,
    title: LEFT,
    pushType: DEFAULT,
    leftNavRenderer: (): null => { return null },
    rightNavRenderer: button(HOME),
    interpolator: leftHorizontal
  },
  right: {
    key: RIGHT,
    title: RIGHT,
    pushType: DEFAULT
  }
}
