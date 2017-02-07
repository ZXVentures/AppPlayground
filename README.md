## AppPlayground

##### React Native & Redux Boilerplate ([GraphQL](http://dev.apollodata.com/react/react-native.html) coming soon)

Boilerplate for a [React Native](https://facebook.github.io/react-native/) project using [Redux](http://redux.js.org/) for state management.

This project also includes multidirectional UI with [NavigationExperimental](https://github.com/facebook/react-native/tree/master/Libraries/NavigationExperimental):

<center>![NAVIGATION_DEMO](https://thumbs.gfycat.com/DecimalMeanGonolek-size_restricted.gif)</center>

### Goals

* Provide a quick prototyping environment for React Native apps with similar architectures.
* Demonstrate React Native, Redux, and GraphQL in common use cases and tests.

### Milestones

#### v1.0 Milestones

* [x] Initial redux integration
* [x] Multidirectional UI with Redux
* [ ] GraphQL integration
* [ ] ListView example with GraphQL

#### v2.0 Milestones

* [ ] Epics with redux observable
* [ ] Caching with GraphQL, Redux, and redux-persist
* [ ] Configurable server for prototyping new data types

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

* Run `yarn install` to install dependencies in the project directory.
* Run the React Native Packager: `react-native start`.
* Ensure you have started your Android simulator.
* Run both platforms with `npm start`
* Or run them individually:
  * Run iOS with `yarn run ios`.
  * Run Android with `yarn run android`.

### Running Tests

* To run tests run `npm test`
