/* @flow */

import type { NavigationSceneRendererProps } from 'react-native'

import React from 'react' // eslint-disable-line no-unused-vars

import {
  PUSH_ROUTE,
  POP_ROUTE
} from './redux/ducks/nav'

import {
  MODAL_PUSH,
  DEFAULT_PUSH,
  DIRECTION_VERTICAL,
  DIRECTION_HORIZONTAL
} from './ui/routes/constants'

import {
  SCENE,
  HEADER
} from './ui/routes/interpolators/constants'

import { REHYDRATE } from 'redux-persist/constants'

export type SubNavProps = {
  onNavigateBack: ?Function // View NavigationHeader.js
};

export type SubNavRenderer = (navProps: SubNavProps) => ?React$Element<any>;

export type InterpolatorType = SCENE | HEADER;

export type Interpolator= (props: NavigationSceneRendererProps) => Object;

export type NavInterpolator = {
  [key: InterpolatorType]: Interpolator
};

export type NavPushType = MODAL_PUSH | DEFAULT_PUSH;

export type RouteType = PUSH_ROUTE | POP_ROUTE;

export type PushDirection = DIRECTION_VERTICAL | DIRECTION_HORIZONTAL;

export type Route = {
  key: string,
  title: string,
  pushType: NavPushType,
  rightNavRenderer?: SubNavRenderer,
  leftNavRenderer?: SubNavRenderer,
  interpolator?: NavInterpolator
};

export type NavState = {
  index: number,
  routes: Route[],
  pushDirection: PushDirection,
  headerInterpolator?: Interpolator
};

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

export type Action =
    { type: REHYDRATE, payload: NativeState }
  | { type: PUSH_ROUTE, payload: { route: Route } }
  | { type: POP_ROUTE }
  ;
