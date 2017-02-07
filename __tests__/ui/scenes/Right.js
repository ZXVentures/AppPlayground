import 'react-native'
import React from 'react' // eslint-disable-line no-unused-vars
import Right from 'ui/scenes/Right'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('ui/scenes/Right', () => {
  it('snapshot test', () => {
    const tree = renderer.create(
      <Right />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
