import 'react-native'
import React from 'react' // eslint-disable-line no-unused-vars
import Modal from 'ui/scenes/Modal'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('ui/scenes/Modal', () => {
  it('snapshot test', () => {
    const tree = renderer.create(
      <Modal />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
