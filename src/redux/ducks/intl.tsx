import { BasicAction } from '../../types'

import messages from './lib/intl'

export const SET_LOCALE = '@ratebeer/intl/SET_LOCALE'
export const LOCALE_SHOULD_UPDATE = '@ratebeer/intl/LOCALE_SHOULD_UPDATE'
export const LOCALE_DID_UPDATE = '@ratebeer/intl/LOCALE_DID_UPDATE'

export interface SetLocaleAction {
  type: string,
  payload: {
    locale: string
  }
}

const isSetLocaleAction = (action: any): action is SetLocaleAction => {
  return action.payload !== undefined
  && action.payload.locale !== undefined
}

export interface IntlState {
  defaultLocale: string,
  currentLocale: string,
  supportedLocales: string[],
  isDirty: boolean,
  messages: { [key: string]: { [key: string]: string } }
}

export const initialState = {
  defaultLocale: 'en',
  currentLocale: 'en',
  supportedLocales: ['en'],
  isDirty: false,
  messages
}
Object.freeze(initialState)

export default (state: IntlState = initialState, action?: BasicAction | SetLocaleAction): IntlState => {
  if (!action) return state

  switch (action.type) {

  case SET_LOCALE:
    if (!isSetLocaleAction(action)) return state
    if (state.supportedLocales.indexOf(action.payload.locale) === -1) return state

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

export const setLocale = (locale: string): SetLocaleAction => ({
  type: SET_LOCALE,
  payload: { locale }
})

export const localeShouldUpdate = (): BasicAction => ({ type: LOCALE_SHOULD_UPDATE })

export const localeDidUpdate = (): BasicAction => ({ type: LOCALE_DID_UPDATE })
