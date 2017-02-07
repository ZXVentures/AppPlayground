/* @flow */
import React from 'react' // eslint-disable-line no-unused-vars

import type { NavigationSceneRendererProps } from 'react-native'

import {
  PUSH_ROUTE,
  POP_ROUTE
} from '../redux/ducks/constants'

import {
  MODAL,
  DEFAULT,
  VERTICAL,
  HORIZONTAL
} from '../ui/routes/constants'

import {
  SCENE,
  HEADER
} from '../ui/routes/interpolators/constants'

export type SubNavProps = {
  onNavigateBack: ?Function // View NavigationHeader.js
};

export type SubNavRenderer = (navProps: SubNavProps) => ?React$Element<any>;

export type InterpolatorType = SCENE | HEADER;

export type Interpolator= (props: NavigationSceneRendererProps) => Object;

export type NavInterpolator = {
  [key: InterpolatorType]: Interpolator
};

export type NavPushType = MODAL | DEFAULT;

export type RouteType = PUSH_ROUTE | POP_ROUTE;

export type PushDirection = VERTICAL | HORIZONTAL;

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
  interpolator?: NavInterpolator
};
