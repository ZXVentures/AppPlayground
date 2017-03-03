import * as React from 'react'
import { ReactElement } from 'react'
import { NavigationSceneRendererProps } from 'react-native'

import leftHorizontal from './interpolators/leftHorizontal'

import NavButton from '../partials/common/NavButton'

const button = (title: string) => (): ReactElement<any> => (<NavButton title={title} />)

export interface SubNavProps {
  onNavigateBack: Function | null
}

export type Interpolator= (props: NavigationSceneRendererProps) => Object

export type NavInterpolator = {
  [key: string]: Interpolator
}

export enum PushType {
  modal,
  default
}

export enum PushDirection {
  vertical,
  horizontal
}

export type SubNavRenderer = (navProps: SubNavProps) => ReactElement<any> | null

export interface Route {
  title: string,
  pushType?: PushType,
  rightNavRenderer?: SubNavRenderer,
  leftNavRenderer?: SubNavRenderer,
  interpolator?: NavInterpolator
}

export type SceneKeys =
    'Home'
  | 'Left'
  | 'Right'
  | 'Modal'

export default {
  home: {
    title: 'Home',
    leftNavRenderer: button('Left'),
    rightNavRenderer: button('Right')
  },
  left: {
    title: 'Left',
    leftNavRenderer: (): null => { return null },
    rightNavRenderer: button('Home'),
    interpolator: leftHorizontal
  },
  modal: {
    title: 'Modal',
    pushType: PushType.modal
  },
  right: {
    title: 'Right'
  }
}
