// This file exists because of https://github.com/facebook/react-native/issues/11585
// coming from `react-native-router-flux`

jest.mock('Linking', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn()
  }
})

jest.mock('AppState', () => {
  return {
    addEventListener: jest.fn()
  }
})

jest.mock('NetInfo', () => {
  return {
    addEventListener: jest.fn()
  }
})
