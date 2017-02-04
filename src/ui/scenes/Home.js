/* @flow */

import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

export default class Home extends Component {

  render(): React$Element<any> {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to AppPlayground!
        </Text>
        <Text style={styles.body}>
          This React Native Boilerplate provides Redux, GraphQL through Apollo, Navigation, and a Test Suite.
        </Text>
        <Text style={styles.body}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={this.props.showModal}>
              <Text style={styles.button}>Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

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
