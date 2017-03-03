import * as React from 'react'
import { ReactElement } from 'react'

import {
  PUSH,
  POP
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

import { NavigationSceneRendererProps } from 'react-native'

export interface SubNavProps {
  onNavigateBack: Function | null
}

export type SubNavRenderer = (navProps: SubNavProps) => ReactElement<any> | null

export type InterpolatorType = 'scene' | 'header'

export type Interpolator= (props: NavigationSceneRendererProps) => Object

export type NavInterpolator = {
  [key: string]: Interpolator
}

export type NavPushType = 'modal' | 'default'

export type RouteType = 'push' | 'pop'

export type PushDirection = 'vertical' | 'horizontal'

export interface Route {
  key: string,
  title: string,
  pushType?: NavPushType,
  rightNavRenderer?: SubNavRenderer,
  leftNavRenderer?: SubNavRenderer,
  interpolator?: NavInterpolator
}

export interface NavState {
  index: number,
  routes: Route[],
  pushDirection: PushDirection,
  interpolator?: NavInterpolator
}
