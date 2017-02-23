/* @flow */

import config from './ducks/config'
import device from './ducks/device'
import nav from './ducks/nav'
import intl from './ducks/intl'

export default {
  config: config(),
  device: device(),
  nav: nav(),
  intl: intl()
}
