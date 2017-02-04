import { combineReducers } from 'redux'

import config from './ducks/config'
import device from './ducks/device'
import nav from './ducks/nav'

const appReducers = {
  config,
  device,
  nav
}

export default (newReducers) => {
  Object.assign(appReducers, newReducers)
  return combineReducers({...appReducers})
}
