/* @flow */

import { NavState } from './nav'
// import type { IntlState } from './intl'

export interface ConfigState {
  appName: string,
  appVersion: string
}

export interface DeviceState {
  isReactNative: boolean,
  platform: string
};

export type NativeState = {
  config: ConfigState,
  device: DeviceState,
  // intl: IntlState,
  apollo: Object,
  nav: NavState
};
