/* @flow */

// React
import React from 'react' // eslint-disable-line no-unused-vars
import { AppRegistry, AsyncStorage, Platform } from 'react-native'

// Redux
import { createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import initialState from './redux/initialState'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

import {
  APP_NAME,
  APP_REDUX_KEY,
  APP_VERSION
} from './constants'

// Reducers & Epics
import makeReducer from './redux/makeReducer'
// TODO: Compine epics export

// Apollo Client
import ApolloClient, { createNetworkInterface } from 'apollo-client'

const networkInterface = createNetworkInterface({
  uri: '/graphql'
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

// Root
import Root from './app/Root'

// Initial State
const nativeInitialState = {
  ...initialState,
  config: {
    ...initialState.config,
    appName: APP_NAME,
    appVersion: APP_VERSION
  },
  device: {
    ...initialState.device,
    isReactNative: true,
    platform: Platform.OS
  },
  apollo: client.reducer()()
}

// Create store
const store = createStore(
  makeReducer({
    apollo: client.reducer()
  }),
  nativeInitialState,
  composeEnhancers(
    autoRehydrate(),
  )
)

// Persistence
const persistConfig = {
  debounce: 100,
  keyPrefix: `${APP_REDUX_KEY}`,
  storage: AsyncStorage
}
persistStore(store, persistConfig)

const AppPlayground = (): React$Element<any> => (
  <Root store={store} client={client} />
)

AppRegistry.registerComponent('AppPlayground', (): () => React$Element<any> => AppPlayground)
