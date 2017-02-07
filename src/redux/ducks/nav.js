/* flow */

import routes from '../../ui/routes/routes'

import type {
  Route,
  NavState,
  Action
} from '../../types'

import { HORIZONTAL, directionByPush } from '../../ui/routes/constants'

import { PUSH_ROUTE, POP_ROUTE } from './constants'

const initialState = {
  index: 0,
  pushDirection: HORIZONTAL,
  routes: [routes.home]
}

export default (state: NavState = initialState, action: Action = {}): NavState => {
  if (!action.type) return state

  switch (action.type) {

  case PUSH_ROUTE:
    const route = action.payload.route
    const routes = state.routes.slice()
    routes.push(route)

    console.log(routes)
    return {
      index: routes.length - 1,
      routes,
      pushDirection: directionByPush[route.pushType],
      interpolator: route.interpolator
    }

  case POP_ROUTE:
    if (state.index <= 0) { return state }
    // es lint is complaining, so humoring it
    const popRoutes = state.routes
    const lastRoute = popRoutes.pop()
    console.log(popRoutes)
    return {
      index: popRoutes.length - 1,
      routes: popRoutes,
      pushDirection: directionByPush[lastRoute.pushType],
      interpolator: lastRoute.interpolator
    }

  default:
    return state
  }
}

const push = (route: Route): Action => {
  return {
    type: PUSH_ROUTE,
    payload: { route: route }
  }
}

export const showLeft = (): Action => push(routes.left)
export const showRight = (): Action => push(routes.right)
export const showModal = (): Action => push(routes.modal)

export const pop = (): Action => { return { type: POP_ROUTE } }
