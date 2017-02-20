// Check NavigationCardStackStyleInterpolator.js (Basically copypasta here)
// Also more on this subject: http://www.reactnativediary.com/2016/12/22/navigation-experimental-custom-transition-2.html
//
import type { NavigationSceneRendererProps } from 'react-native'

import { SCENE, HEADER } from './constants'

const forInitial = (props: NavigationSceneRendererProps): Object => {
  const { navigationState, scene } = props

  const focused = navigationState.index === scene.index
  const opacity = focused ? 1 : 0
  const translate = focused ? 0 : 1000000
  return {
    opacity,
    transform: [
      { translateX: translate },
      { translateY: translate }
    ]
  }
}

const headerInterpolator = (props: NavigationSceneRendererProps): Object => {
  const { position, scene } = props
  const { index } = scene
  return {
    opacity: position.interpolate({
      inputRange: [ index - 1, index, index + 1 ],
      outputRange: ([ 0, 1, 0 ]: Array<number>)
    }),
    transform: [
      {
        translateX: position.interpolate({
          inputRange: [ index - 1, index + 1 ],
          outputRange: ([ -200, 200 ]: Array<number>)
        })
      }
    ]
  }
}

const sceneInterpolator = (props: NavigationSceneRendererProps): Object => {
  const { layout, position, scene } = props

  if (!layout.isMeasured) { return forInitial(props) }

  const index = scene.index
  const width = layout.initWidth

  const inputRange = [index - 1, index, index + 0.99, index + 1]

  const opacity = position.interpolate({
    inputRange,
    outputRange: ([1, 1, 0.3, 0]: Array<number>)
  })

  const scale = position.interpolate({
    inputRange,
    outputRange: ([1, 1, 0.95, 0.95]: Array<number>)
  })

  const translateY = 0
  const translateX = position.interpolate({
    inputRange,
    outputRange: ([-width, 0, 10, 10]: Array<number>)
  })

  return {
    opacity,
    transform: [
      { scale },
      { translateX },
      { translateY }
    ]
  }
}

export default {
  [SCENE]: sceneInterpolator,
  [HEADER]: headerInterpolator
}
