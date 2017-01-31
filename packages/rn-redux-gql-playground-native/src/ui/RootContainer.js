/* @flow */

import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { NavigationExperimental, Platform, BackAndroid } from 'react-native'

import { connect } from 'react-redux'

import routes from './routes/routes'

import { pop } from '../redux/ducks/nav'

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader
} = NavigationExperimental

import type { // eslint-disable-line no-duplicate-imports
  NavigationSceneRendererProps,
  SubNavProps
} from 'react-native'

import type {
  NavState,
  NativeState
} from '../types'

type Props = {
  navState: NavState,
  pop: () => () => void
};

export class RootContainer extends Component {

  props: Props
  static defaultProps = {}

  constructor(props: Props) {
    super(props)

    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', (): bool => {
        const { navState, pop } = this.props
        if (navState.index !== 0) {
          pop()
          return true
        }
        return false
      })
    }
  }

  render(): React$Element<any> {
    const { navState, pop } = this.props
    console.log(navState.pushDirection)
    return (
      <NavigationCardStack
        navigationState={navState}
        onNavigateBack={pop}
        style={{ flex: 1 }}
        direction={navState.pushDirection}
        renderHeader={this._renderHeader.bind(this)}
        renderScene={this._renderScene.bind(this)}
      />
    )
  }

  _renderHeader(navProps: NavigationSceneRendererProps): React$Element<any> {
    const { navState, pop } = this.props
    const currentRoute = navState.routes[navState.index]

    return (
      <NavigationHeader
        {...navProps}
        onNavigateBack={pop}
        renderTitleComponent={this._renderHeaderTitle.bind(this)}
        renderLeftComponent={currentRoute.leftNavRenderer} // undefined triggers default :)
        renderRightComponent={currentRoute.rightNavRenderer}
      />
    )
  }

  _renderHeaderTitle(props: SubNavProps): React$Element<any> {
    const { navState } = this.props
    const currentRoute = navState.routes[navState.index]

    return (<NavigationHeader.Title>{currentRoute.title}</NavigationHeader.Title>)
  }

  _renderScene(navProps: NavigationSceneRendererProps): React$Element<any> {
    return routes.asScenes[navProps.scene.route.key]
  }
}

const mapStateToProps = (state: NativeState): Object => {
  return {
    navState: state.nav
  }
}

const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    pop: (): void => dispatch(pop())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
