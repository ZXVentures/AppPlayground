import { BasicAction } from '../../types'

import routes, {
  Route,
  PushDirection,
  PushType,
  NavInterpolator
} from '../../ui/routes/routes'

export const PUSH = '@appPlayground/routes/PUSH'
export const POP = '@appPlayground/routes/POP'

const directionByPush = (type: PushType): PushDirection => {
  switch (type) {
  case (PushType.default): return PushDirection.horizontal
  case (PushType.modal): return PushDirection.vertical
  }
}

export interface NavState {
  index: number,
  routes: Route[],
  pushDirection: PushDirection,
  interpolator?: NavInterpolator
}

const initialState = {
  index: 0,
  pushDirection: PushDirection.horizontal,
  routes: [routes.home]
}

export interface NavAction {
  type: string,
  payload: {
    route: Route
  }
}

const isNavAction = (action: any): action is NavAction => {
  return action.payload !== undefined
  && action.payload.route !== undefined
}

export default (state: NavState = initialState, action?: BasicAction | NavAction): NavState => {
  if (!action) return state

  switch (action.type) {

  case PUSH:
    if (!isNavAction(action)) return
    const route = action.payload.route
    const routes = state.routes.slice()
    routes.push(route)

    return {
      index: routes.length - 1,
      routes,
      pushDirection: directionByPush[route.pushType],
      interpolator: route.interpolator
    }

  case POP:
    if (state.index <= 0) { return state }
    // es lint is complaining, so humoring it
    const popRoutes = state.routes
    const lastRoute = popRoutes.pop()

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

const push = (route: Route): NavAction => {
  return {
    type: PUSH,
    payload: { route: route }
  }
}

export const showLeft = (): NavAction => push(routes.left)
export const showRight = (): NavAction => push(routes.right)
export const showModal = (): NavAction => push(routes.modal)

export const pop = (): BasicAction => { return { type: POP } }
