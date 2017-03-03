/* @flow */

interface DeviceState {
  isReactNative: boolean
}

const initialState = {
  isReactNative: false,
  platform: ''
}
Object.freeze(initialState)

export default (state: DeviceState = initialState): DeviceState => state
