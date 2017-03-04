import { NavState } from '../redux/ducks/nav'
import { IntlState } from '../redux/ducks/intl'
import { DeviceState } from '../redux/ducks/device'
import { ConfigState } from '../redux/ducks/config'

export type NativeState = {
  config: ConfigState,
  device: DeviceState,
  intl: IntlState,
  apollo: Object,
  nav: NavState
};
