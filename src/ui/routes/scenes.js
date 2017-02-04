import React from 'react' // eslint-disable-line no-unused-vars

import Home from '../scenes/Home'
import Left from '../scenes/Left'
import Right from '../scenes/Right'

import {
  HOME,
  RIGHT,
  LEFT
} from './constants'

export default {
  [HOME]: <Home />,
  [RIGHT]: <Right />,
  [LEFT]: <Left />
}
