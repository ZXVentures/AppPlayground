/* @flow */

import config from './ducks/config'
import device from './ducks/device'
import nav from './ducks/nav'

export default {
  config: config(),
  device: device(),
  nav: nav()
}
