export interface ConfigState {
  appName: string,
  appVersion: string
}

const initialState = {
  appName: '',
  appVersion: ''
}
Object.freeze(initialState)

export default (state: ConfigState = initialState): ConfigState => state
