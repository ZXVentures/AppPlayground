/* @flow */

// $FlowIssue
import reducer from 'redux/ducks/device'

describe('reducer tests', () => {
  it('should return an initial state', () => {
    const expectedState = {
      isReactNative: false,
      platform: ''
    }
    expect(reducer()).toEqual(expectedState)
  })

  it('should not mutate state', () => {
    const expectedState = {
      isReactNative: true,
      platform: 'ios'
    }
    expect(reducer(expectedState)).toEqual(expectedState)
  })
})
