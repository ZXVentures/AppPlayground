import React, { React$Element, Component } from 'react' // eslint-disable-line no-unused-vars

import { TouchableHighlight } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class IconButton extends Component {
  render(): React$Element {
    // TODO: Localization
    return (
      <TouchableHighlight style={{
        marginHorizontal: 10
      }}
        underlayColor={'transparent'}
        onPress={this.props.onPress}>
        <Icon name={this.props.icon}
          size={this.props.size || 24}
          color={this.props.color || '#64b5f6'}
        />
      </TouchableHighlight>
    )
  }
}
