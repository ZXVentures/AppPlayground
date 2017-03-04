import React from 'react' // eslint-disable-line no-unused-vars

import { Text } from 'react-native'

export const text = (style: Object): Function => {
  return function(message: string): React$Element<any> {
    return (<Text style={style}>{message}</Text>)
  }
}
