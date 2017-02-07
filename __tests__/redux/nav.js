import 'react-native'
import React from 'react' // eslint-disable-line no-unused-vars

import { DIRECTION_HORIZONTAL } from 'ui/routes/constants'
import routes from 'ui/routes/routes'

import NavReducer, {
  showLeft,
  showModal,
  pop
} from 'redux/ducks/nav'

const homeState = {
  index: 0,
  routes: [routes.home],
  pushDirection: DIRECTION_HORIZONTAL
}

describe('functional tests', () => {
  it('should start on home page', () => {
    const initialState = NavReducer()
    expect(initialState.routes.length).toEqual(1)
    expect(initialState.routes[0].key).toEqual(homeState.routes[0].key)
  })

  it('should add and remove routes as they are added and pushed to the stack', () => {
    let state = NavReducer()

    state = NavReducer(state, showLeft())
    expect(state.routes.length).toEqual(2)
    expect(state.routes[0].key).toEqual(homeState.routes[0].key)
    expect(state.routes[1].key).toEqual(showLeft().payload.route.key)

    state = NavReducer(state, showModal())
    expect(state.routes.length).toEqual(3)
    expect(state.routes[0].key).toEqual(homeState.routes[0].key)
    expect(state.routes[1].key).toEqual(showLeft().payload.route.key)
    expect(state.routes[2].key).toEqual(showModal().payload.route.key)

    state = NavReducer(state, pop())
    expect(state.routes.length).toEqual(2)
    expect(state.routes[0].key).toEqual(homeState.routes[0].key)
    expect(state.routes[1].key).toEqual(showLeft().payload.route.key)

    state = NavReducer(state, pop())
    expect(state.routes.length).toEqual(1)
    expect(state.routes[0].key).toEqual(homeState.routes[0].key)
  })

  it('should not pop the home scene', () => {
    let state = NavReducer()

    state = NavReducer(state, pop())
    expect(state.routes.length).toEqual(1)
    expect(state.routes[0].key).toEqual(homeState.routes[0].key)
  })

  it('it should not update the state when a non defined action is sent', () => {
    let state = NavReducer()

    state = NavReducer(state, { type: 'TEST' })
    expect(state.routes.length).toEqual(1)
    expect(state.routes[0].key).toEqual(homeState.routes[0].key)
  })

  // TODO: Add tests for direction once we have some
  // modal type displays.
})
