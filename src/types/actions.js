/* @flow */

import { REHYDRATE } from 'redux-persist/constants'
import {
  PUSH,
  POP,
  SET_LOCALE,
  LOCALE_SHOULD_UPDATE,
  LOCALE_DID_UPDATE
} from '../redux/ducks/constants'

import type { NativeState } from './core'
import type { Route } from './nav'
import type { SupportedLocale } from './intl'

export type Action =
    { type: REHYDRATE, payload: NativeState }
  | { type: PUSH, payload: { route: Route } }
  | { type: POP }
  | { type: SET_LOCALE, payload: { locale: SupportedLocale } }
  | { type: LOCALE_SHOULD_UPDATE }
  | { type: LOCALE_DID_UPDATE }
  ;
