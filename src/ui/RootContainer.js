/* @flow */

import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { NavigationExperimental, Platform, BackAndroid } from 'react-native'

import { connect } from 'react-redux'

import scenes from './routes/scenes'

import { pop } from '../redux/ducks/nav'

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader
} = NavigationExperimental

import type { // eslint-disable-line no-duplicate-imports
  NavigationSceneRendererProps
} from 'react-native'

import type {
  NavState,
  NativeState
} from '../types'

type Props = {
  navState: NavState,
  pop: () => () => void
};

const SEARCH_SCREEN_INDEX = 0

export class RootContainer extends Component {

  props: Props
  static defaultProps = {}

  constructor(props: Props) {
    super(props)

    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', (): bool => {
        const { navState, pop } = this.props
        if (navState.index !== SEARCH_SCREEN_INDEX) {
          pop()
          return true
        }
        return false
      })
    }
  }

  render(): React$Element<any> {
    const { navState, pop } = this.props
    const currentRoute = navState.routes[navState.index]

    // Used to bypass flow
    const sceneInterpolator: mixed = (currentRoute.interpolator) ? currentRoute.interpolator.scene : undefined

    return (
      <NavigationCardStack
        navigationState={navState}
        onNavigateBack={pop}
        style={{ flex: 1 }}
        direction={navState.pushDirection}
        renderHeader={this._renderHeader.bind(this)}
        renderScene={this._renderScene.bind(this)}
        cardStyleInterpolator={sceneInterpolator}
      />
    )
  }

  _renderHeader(navProps: NavigationSceneRendererProps): React$Element<any> {
    const { navState, pop } = this.props

    const index = navState.index
    const currentRoute = navState.routes[index]

    return (
      <NavigationHeader {...navProps}
        onNavigateBack={pop}
        renderLeftComponent={currentRoute.leftNavRenderer}
        renderRightComponent={currentRoute.rightNavRenderer}
      />
    )
    // titleStyleInterpolator={navState.headerInterpolator}
  }

  _renderScene(navProps: NavigationSceneRendererProps): React$Element<any> {
    return scenes[navProps.scene.route.key]
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
