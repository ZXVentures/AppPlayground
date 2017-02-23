/* @flow */

import 'rxjs/add/operator/map'

import { SET_LOCALE } from '../ducks/constants'
import { localeShouldUpdate } from '../ducks/intl'

// Using flow types with epics is a bit weird as parameter is a stream
/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */

// $FlowFixMe
export const localeUpdateEpic = (action$, store) =>
  action$.ofType(SET_LOCALE)
  .map((action) => localeShouldUpdate())
