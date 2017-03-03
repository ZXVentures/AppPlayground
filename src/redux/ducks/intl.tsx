/* @flow */

import type {
  IntlState,
  SupportedLocale,
  Action
} from '../../types'

import messages from './lib/intl'

export const initialState = {
  defaultLocale: 'en',
  currentLocale: 'en',
  supportedLocales: ['en'],
  isDirty: false,
  messages
}
Object.freeze(initialState)

import {
  SET_LOCALE,
  LOCALE_SHOULD_UPDATE,
  LOCALE_DID_UPDATE
} from './constants'

export default (state: IntlState = initialState, action?: Action): IntlState => {
  if (!action) return state

  switch (action.type) {

  case SET_LOCALE:
    return {
      ...state,
      currentLocale: action.payload.locale
    }

  case LOCALE_SHOULD_UPDATE:
    return {
      ...state,
      isDirty: true
    }

  case LOCALE_DID_UPDATE:
    return {
      ...state,
      isDirty: false
    }

  default: return state
  }
}

export const setLocale = (locale: SupportedLocale): Action => ({
  type: SET_LOCALE,
  payload: { locale }
})

export const localeShouldUpdate = (): Action => ({ type: LOCALE_SHOULD_UPDATE })

export const localeDidUpdate = (): Action => ({ type: LOCALE_DID_UPDATE })
