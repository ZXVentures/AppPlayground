/* @flow */

import React from 'react' // eslint-disable-line no-unused-vars

import Home from '../scenes/Home'
import { DEFAULT_PUSH } from './pushConstants'

export const HOME_KEY = 'home'
export const DEBUG_KEY = 'debug'
export const USER_PROFILE_KEY = 'userProfile'

const routes = {
  home: {
    key: HOME_KEY,
    title: 'Home',
    pushType: DEFAULT_PUSH
  }
}

export default {
  ...routes,
  asScenes: {
    [HOME_KEY]: <Home />
  }
}
