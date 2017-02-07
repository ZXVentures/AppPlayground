import 'react-native'
import React from 'react' // eslint-disable-line no-unused-vars

import { NavButton, mapDispatchToProps } from 'ui/partials/common/NavButton'

import { LEFT, RIGHT } from 'ui/routes/constants'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('ui/partials/common/NavButton', () => {
  it('snapshot test', () => {
    const tree = renderer.create(
      <NavButton />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handles press actions appropriately', () => {
    const navButton = new NavButton()
    const mockFn = jest.fn()
    navButton.props = {}
    navButton.props.showLeft = mockFn
    navButton.props.showRight = mockFn
    navButton.props.pop = mockFn

    navButton.props.title = LEFT
    navButton._onPress()
    expect(mockFn).toHaveBeenCalled()

    mockFn.mockClear()

    navButton.props.title = RIGHT
    navButton._onPress()
    expect(mockFn).toHaveBeenCalled()

    mockFn.mockClear()

    navButton.props.title = 'TEST'
    navButton._onPress()
    expect(mockFn).toHaveBeenCalled()

    mockFn.mockClear()
  })

  it('maps dispatch to props', () => {
    const mockDispatch = jest.fn()

    const props = mapDispatchToProps(mockDispatch)

    expect(props).not.toBeNull()
    expect(Object.keys(props).length).toBe(3) // you need to add a test if this fails
    props.showLeft()
    expect(mockDispatch).toHaveBeenCalled()

    mockDispatch.mockClear()

    props.showRight()
    expect(mockDispatch).toHaveBeenCalled()

    mockDispatch.mockClear()

    props.pop()
    expect(mockDispatch).toHaveBeenCalled()

    mockDispatch.mockClear()
  })
})
