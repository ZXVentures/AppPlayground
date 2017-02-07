/* @flow */

import { REHYDRATE } from 'redux-persist/constants'
import { PUSH_ROUTE, POP_ROUTE } from '../redux/ducks/constants'

import type { NativeState } from './core'
import type { Route } from './nav'

export type Action =
    { type: REHYDRATE, payload: NativeState }
  | { type: PUSH_ROUTE, payload: { route: Route } }
  | { type: POP_ROUTE }
  ;
