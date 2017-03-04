import React from 'react' // eslint-disable-line no-unused-vars
import { NavigationExperimental } from 'react-native'
import type { NavigationSceneRendererProps } from 'react-native' // eslint-disable-line no-duplicate-imports
const { Header: NavigationHeader } = NavigationExperimental

export default class NavigationHeaderInterpolatable extends NavigationHeader {

  _renderTitle = (props: NavigationSceneRendererProps): ?React.Element<any> => {
    // $FlowIssue
    return this._renderSubView(
      props,
      'title',
      this.props.renderTitleComponent,
      this.props.titleInterpolator
    )
  }
}
