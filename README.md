## React Native, Redux, GraphQL Playground

Boilerplate for a [React Native](https://facebook.github.io/react-native/) project using [Redux](http://redux.js.org/) for state and [GraphQL (Apollo)](http://dev.apollodata.com/react/react-native.html) for network requests.

### Goals

* Provide a quick prototyping environment for React Native apps with similar architectures.
* Demonstrate React Native, Redux, and GraphQL in common use cases and tests.

### Core Technology Choices & Patterns

* [React Native](https://facebook.github.io/react-native/)
* [Redux](http://redux.js.org/)
* [Apollo](http://dev.apollodata.com/)
* [Jest](https://facebook.github.io/jest/)
* [NavigationExperimental](https://github.com/facebook/react-native/tree/master/Libraries/NavigationExperimental)
* [Ducks](https://github.com/erikras/ducks-modular-redux)

### Installation

* We recommend the following:

  * [Install Node with NVM](https://github.com/creationix/nvm).
  * [Install YARN](https://yarnpkg.com/)
  * Setting up Atom for a React Native environment using [Nuclide](https://nuclide.io/docs/quick-start/getting-started/#installation), including all additional [packages](https://nuclide.io/docs/quick-start/getting-started/#packages).
  * [Install React Native](https://facebook.github.io/react-native/).
    * Ensure you have all dependencies installed such as Xcode and Android Studio.
  * [Install React Native Debugger](https://github.com/jhen0409/react-native-debugger)

### Getting Started

* Currently you can run the React Native project on Android and iOS.
  * Begin by navigating to the `rn-redux-gql-playground-native` directory.
  * Run `yarn install` to install the project directory.
  * Run the React Native Packager: `react-native start`.
  * Run iOS with `yarn run ios`.
  * Run Android with `yarn run android`.
