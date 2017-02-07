import React, { React$Element, Component } from 'react' // eslint-disable-line no-unused-vars

import { TouchableHighlight } from 'react-native'

import { LEFT, RIGHT } from '../../routes/constants'

import Icon from 'react-native-vector-icons/FontAwesome'

export class NavButton extends Component {
  render(): React$Element {
    const iconName = (this.props.title === LEFT) ? 'bars' : 'globe'

    return (
      <TouchableHighlight style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
      }}
        onPress={this._onPress.bind(this)}>
        <Icon name={iconName}
          size={24}
          color={'#64b5f6'}
        />
      </TouchableHighlight>
    )
  }

  _onPress() {
    switch (this.props.title) {
    case LEFT: return this.props.showLeft()
    case RIGHT: return this.props.showRight()
    default: return this.props.pop()
    }
  }
}

import { showLeft, showRight, pop } from '../../../redux/ducks/nav'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch: Function): Object => ({
  showLeft: (): void => dispatch(showLeft()),
  showRight: (): void => dispatch(showRight()),
  pop: (): void => dispatch(pop())
})

export default connect(null, mapDispatchToProps)(NavButton)
