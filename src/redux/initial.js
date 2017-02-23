/* @flow */

import { combineReducers } from 'redux'

import config from './ducks/config'
import device from './ducks/device'
import nav from './ducks/nav'
import intl from './ducks/intl'

const appReducers = {
  config,
  device,
  nav,
  intl
}

export const makeReducer = (extraReducers: Object): Function => {
  return combineReducers({
    ...appReducers,
    ...extraReducers
  })
}

export const initialState = {
  config: config(),
  device: device(),
  nav: nav(),
  intl: intl()
}
