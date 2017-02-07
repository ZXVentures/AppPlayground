import 'react-native'
import React from 'react' // eslint-disable-line no-unused-vars

import { DEFAULT, MODAL } from 'ui/routes/constants'

import routes from 'ui/routes/routes'

describe('ui/routes/routes', () => {
  it('routes home', () => {
    const route = routes.home
    expect(route.key).not.toBeNull()
    expect(route.title).not.toBeNull()
    expect(route.pushType).not.toBeNull()
    expect(route.pushType).toEqual(DEFAULT)
    expect(route.leftNavRenderer).not.toBeNull()
    expect(route.leftNavRenderer).toBeInstanceOf(Function)
    expect(route.leftNavRenderer()).not.toBeNull()
    expect(route.rightNavRenderer).not.toBeNull()
    expect(route.rightNavRenderer).toBeInstanceOf(Function)
    expect(route.rightNavRenderer()).not.toBeNull()
  })

  it('routes left', () => {
    const route = routes.left
    expect(route.key).not.toBeNull()
    expect(route.title).not.toBeNull()
    expect(route.pushType).not.toBeNull()
    expect(route.pushType).toEqual(DEFAULT)
    expect(route.leftNavRenderer).not.toBeNull()
    expect(route.leftNavRenderer).toBeInstanceOf(Function)
    expect(route.leftNavRenderer()).toBeNull()
    expect(route.rightNavRenderer).not.toBeNull()
    expect(route.rightNavRenderer).toBeInstanceOf(Function)
    expect(route.rightNavRenderer()).not.toBeNull()
    expect(route.interpolator).not.toBeNull()
    expect(route.interpolator).toBeInstanceOf(Object)
  })

  it('routes modal', () => {
    const route = routes.modal
    expect(route.key).not.toBeNull()
    expect(route.title).not.toBeNull()
    expect(route.pushType).not.toBeNull()
    expect(route.pushType).toEqual(MODAL)
  })

  it('routes right', () => {
    const route = routes.right
    expect(route.key).not.toBeNull()
    expect(route.title).not.toBeNull()
    expect(route.pushType).not.toBeNull()
    expect(route.pushType).toEqual(DEFAULT)
  })
})
