/* @flow */

import reducer from 'redux/ducks/config'

describe('reducer tests', () => {
  it('should return an initial state', () => {
    const expectedState = {
      appName: '',
      appVersion: ''
    }
    expect(reducer()).toEqual(expectedState)
  })

  it('should not mutate state', () => {
    const expectedState = {
      appName: 'AppPlayground',
      appVersion: '0.1.0'
    }
    expect(reducer(expectedState)).toEqual(expectedState)
  })
})
