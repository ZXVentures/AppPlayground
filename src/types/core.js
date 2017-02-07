/* @flow */

import type { NavState } from './nav'

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
  apollo: Object,
  error: ?Object,
  nav: NavState
};
