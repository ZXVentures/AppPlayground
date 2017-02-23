/* @flow */

// React
import React, { Component } from 'react' // eslint-disable-line no-unused-vars

// Providers
import { Provider as ReduxProvider, connect } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { IntlProvider } from 'react-intl'

// Routing Container
import RootContainer from '../ui/RootContainer'

// Permissions
// import Permissions from 'react-native-permissions'

export class Root extends Component {

  // TODO: Add React component return types for flow
  render() { // eslint-disable-line flowtype/require-return-type
    const { store, client, locale, defaultLocale, messages } = this.props

    // Try to find messages for locale, fallback to without region, fallback to default
    const localeWithoutRegion = locale.toLowerCase().split(/[_-]+/)[0]
    const localeMessages = messages[locale] ||
      messages[localeWithoutRegion] ||
      messages[defaultLocale]

    return (
      <ApolloProvider store={store} client={client}>
        <ReduxProvider store={store}>
          <IntlProvider locale={locale} messages={localeMessages}>
              <RootContainer />
            </IntlProvider>
        </ReduxProvider>
      </ApolloProvider>
    )
  }
}

import type { NativeState } from '../types'

const mapStateToProps = (state: NativeState): Object => ({
  intlIsDirty: state.intl.isDirty,
  defaultLocale: state.intl.defaultLocale,
  locale: state.intl.currentLocale,
  messages: state.intl.messages
})

import { localeDidUpdate } from '../redux/ducks/intl'

const mapDispatchToProps = (dispatch: Function): Object => ({
  localeUpdated: (): void => dispatch(localeDidUpdate())
})

const mergeProps = (stateProps: Object, dispatchProps: Object, ownProps: Object): Object => ({
  ...ownProps,
  ...dispatchProps,
  ...stateProps
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Root)
