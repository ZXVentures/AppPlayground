import { combineReducers } from 'redux'

import config from './ducks/config'
import device from './ducks/device'

const appReducers = {
  config,
  device
}

export default (newReducers) => {
  Object.assign(appReducers, newReducers)
  return combineReducers({...appReducers})
}
