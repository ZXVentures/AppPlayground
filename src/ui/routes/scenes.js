import React from 'react' // eslint-disable-line no-unused-vars

import Home from '../scenes/Home'
import Left from '../scenes/Left'
import Modal from '../scenes/Modal'
import Right from '../scenes/Right'

import {
  HOME,
  RIGHT,
  MODAL_TITLE,
  LEFT
} from './constants'

export default {
  [HOME]: <Home />,
  [RIGHT]: <Right />,
  [MODAL_TITLE]: <Modal />,
  [LEFT]: <Left />
}
