/* @flow */

import type { DeviceState } from '../../types'

const initialState = {
  isReactNative: false,
  platform: ''
}
Object.freeze(initialState)

export default (state: DeviceState = initialState): DeviceState => state
