import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import { FormattedMessage } from 'react-intl'

import { text } from '../factories/intl'

export class Home extends Component {

  render(): React$Element<any> {
    return (
      <View style={styles.container}>
        <FormattedMessage id={'home.welcome'}
          defaultMessage={'Welcome to AppPlayground!'}>
            {text(styles.welcome)}
        </FormattedMessage>
        <FormattedMessage id={'home.intro'}
          defaultMessage={'This React Native Boilerplate provides Redux, GraphQL through Apollo, Navigation, and a Test Suite.'}>
            {text(styles.body)}
        </FormattedMessage>
        <FormattedMessage id={'home.debugInstructions'}
          defaultMessage={`Double tap R on your keyboard to reload,\n
          Shake or press menu button for dev menu`}>
            {text(styles.body)}
        </FormattedMessage>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={this.props.showModal}>
              <FormattedMessage id={'home.modal'}
                defaultMessage={'Modal'}>
                  {text(styles.button)}
              </FormattedMessage>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

import { showModal } from '../../redux/ducks/nav'

export const mapDispatchToProps = (dispatch: Function): Object => ({
  showModal: (): void => dispatch(showModal())
})

import { connect } from 'react-redux'
export default connect(null, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    marginBottom: 20
  },
  body: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  buttonContainer: {
    height: 50,
    marginTop: 20
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    fontWeight: '500',
    fontSize: 18,
    marginHorizontal: 10
  }
})
