/* @flow */

import type { ConfigState } from '../../types'

const initialState = {
  appName: '',
  appVersion: ''
}
Object.freeze(initialState)

export default (state: ConfigState = initialState): ConfigState => state
