/* flow */

import routes from '../../ui/routes/routes'

import type {
  Route,
  NavState,
  Action
} from '../../types'

import { DIRECTION_HORIZONTAL, directionByPush } from '../../ui/routes/pushConstants'

export const PUSH_ROUTE = 'PUSH'
export const POP_ROUTE = 'POP'

const initialState = {
  index: 0,
  routes: [routes.home],
  pushDirection: DIRECTION_HORIZONTAL
}

export default (state: NavState = initialState, action: Action = {}): NavState => {
  if (!action.type) return state

  switch (action.type) {

  case PUSH_ROUTE:
    const route = action.payload.route
    const routes = state.routes.slice()
    routes.push(route)

    return {
      ...state,
      index: routes.length - 1,
      routes,
      pushDirection: directionByPush[route.pushType]
    }

  case POP_ROUTE:
    if (state.index <= 0) { return state }
    // es lint is complaining, so humoring it
    const popRoutes = state.routes
    const lastRoute = popRoutes.pop()
    return {
      ...state,
      index: popRoutes.length - 1,
      routes: popRoutes,
      pushDirection: directionByPush[lastRoute.pushType]
    }

  default:
    return state

  }
}

// eslint-disable-next-line no-unused-vars
const push = (route: Route): Action => {
  return {
    type: PUSH_ROUTE,
    payload: { route: route }
  }
}

export const pop = (): Action => { return { type: POP_ROUTE } }
