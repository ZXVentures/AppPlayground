/* @flow */

import React from 'react' // eslint-disable-line no-unused-vars
import { NavigationExperimental } from 'react-native'
import type { NavigationSceneRendererProps } from 'react-native' // eslint-disable-line no-duplicate-imports
const { Header: NavigationHeader } = NavigationExperimental

export default class NavigationHeaderInterpolatable extends NavigationHeader {

  _titleInterpolator: (props: NavigationSceneRendererProps) => Object

  constructor(props: Object) {
    super(props)
    this._titleInterpolator = props.titleInterpolator
  }

  _renderTitle = (props: NavigationSceneRendererProps): ?React.Element<any> => {
    // $FlowSuppressError
    return this._renderSubView(
      props,
      'title',
      this.props.renderTitleComponent,
      this._titleInterpolator
    )
  }
}
