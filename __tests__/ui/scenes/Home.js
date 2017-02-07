import 'react-native'
import React from 'react' // eslint-disable-line no-unused-vars
import { Home, mapDispatchToProps } from 'ui/scenes/Home'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('ui/scenes/Home', () => {
  it('snapshot test', () => {
    const tree = renderer.create(
      <Home />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('maps dispatch to props', () => {
    const mockDispatch = jest.fn()

    const props = mapDispatchToProps(mockDispatch)

    expect(props).not.toBeNull()
    expect(Object.keys(props).length).toBe(1) // you need to add a test if this fails
    props.showModal()
    expect(mockDispatch).toHaveBeenCalled()
  })
})
