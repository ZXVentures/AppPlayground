/* @flow */

// React
import React, { Component } from 'react' // eslint-disable-line no-unused-vars

// Providers
import { Provider as ReduxProvider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'

// Routing Container
import RootNavigator from '../ui/RootNavigator'

// Permissions
// import Permissions from 'react-native-permissions'

export default class Root extends Component {

  // TODO: Add React component return types for flow
  render() { // eslint-disable-line flowtype/require-return-type
    const { store, client } = this.props

    return (
      <ApolloProvider store={store} client={client}>
        <ReduxProvider store={store}>
          <RootNavigator />
        </ReduxProvider>
      </ApolloProvider>
    )
  }
}
