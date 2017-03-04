import { addLocaleData } from 'react-intl'

// When adding a support for a new locale you'll want to pull
// locale data here from react-intl. Note that regional locales
// such as en-UK are included as part of the greater set of
// locale data associated with the country code.
import * as en from 'react-intl/locale-data/en'

// You then destructure the import and add the locale data here.
addLocaleData([...en])

// Import the actual translated messages keyed by id here.
import enMessages from '../../../intl/locales/default'

// Add to this export and then 🚀
export default {
  'en': enMessages
}
