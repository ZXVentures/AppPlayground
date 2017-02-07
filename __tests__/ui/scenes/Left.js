import 'react-native'
import React from 'react' // eslint-disable-line no-unused-vars
import Left from 'ui/scenes/Left'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('ui/scenes/Left', () => {
  it('snapshot test', () => {
    const tree = renderer.create(
      <Left />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
