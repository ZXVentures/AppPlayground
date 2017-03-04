export interface DeviceState {
  isReactNative: boolean,
  platform: string
}

const initialState = {
  isReactNative: false,
  platform: ''
}
Object.freeze(initialState)

export default (state: DeviceState = initialState): DeviceState => state
