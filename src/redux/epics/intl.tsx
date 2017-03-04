import 'rxjs/add/operator/map'

import { SET_LOCALE } from '../ducks/intl'
import { localeShouldUpdate } from '../ducks/intl'

export const localeUpdateEpic = (action$, store) =>
  action$.ofType(SET_LOCALE)
  .map((action) => localeShouldUpdate())
