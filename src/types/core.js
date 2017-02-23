/* @flow */

import type { NavState } from './nav'
import type { IntlState } from './intl'

export type ConfigState = {
  appName: string,
  appVersion: string
};

export type DeviceState = {
  isReactNative: bool,
  platform: string
};

export type NativeState = {
  config: ConfigState,
  device: DeviceState,
  intl: IntlState,
  apollo: Object,
  error: ?Object,
  nav: NavState
};
