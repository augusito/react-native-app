This project was bootstrapped with [react-native init](https://github.com/react-native-community/cli).

## Setting Up Development Environment ([React Native CLI, Windows + Android](https://facebook.github.io/react-native/docs/getting-started))

Node.js (v10.16.0) - a JavaScript runtime built on Chrome's V8 JavaScript engine.

npm (6.9.0) - a package manager for the JavaScript programming language.

npx (6.9.0) - makes it easy to use CLI tools and other executables hosted on the registry.

React Native CLI (2.9.0) - React Native command line tools

Python  (v2.7.16) - for React Native's build system

JDK  (1.8.0_221)- a development environment for building applications, 

Android Studio 3.5

SDK platforms

	Android 9.0 (pie)

	Android SDK platform 28

	Sources for Android 28

	Google APIs Intel x86 Atom System Image

	Google Play Intel x86 Atom System Image

SDK Tools

	Android Emulator 29.2.1

	Android SDK Platform-Tools 29.0.4

	Android SDK Tools 26.1.1

	Google USB Driver 11

	Intel x86 Emulator Accelerator (HAXM Installer) 7.5.2

Android Virtual Device

	Pixel 2 API 28

## Getting started
1. 	In addition to setting up development environment as described above, make sure you have [`git`](https://git-scm.com/) installed.
2. 	Clone this repository locally.
3.  Change the current working directory to the cloned repository.
4.	Run `npm install` to install dependencies.
5.	Preparing the Android device (physical or emulator).
6. 	Run `npx react-native run-android` from the root directory of the repository.



## Available Scripts

In the project directory, you can run:

### `npm run android` or `npx react-native run-android`
 
Runs app in Android emulator.<br>
See the section about [Running On Device](https://facebook.github.io/react-native/docs/running-on-device)

### `npm start`

Runs the Metro Bundler.<br>
See [Metro website](https://facebook.github.io/metro/en/) for more information.

### `npm test`

Runs tests with Jest.<br>
See the section about [Testing React Native Apps](https://jestjs.io/docs/en/tutorial-react-native) for more information.

## Project Description

### Authentication

1. JWT (username and password)
	- The user is prompted to provide username and password which are submitted to the backend.
	- The backed validates the submitted credentials.
	- If the credentials are valid, the user is logged in and a signed token is created and returned in response, otherwise appropriate error messages are returned.
	- The client saves the token locally (in this case AsyncStorage) and sends it back in every subsequent request that needs authentication.
	- All requests needing authentication pass though a middleware that checks the provided token and allows the request only if the token is valid
	
2. OAuth (service provider)
	- The user is prompted to login using a service provider (facebook or google).
	- The client receives OAuth token from the service provider after user gives authorization.
	- The client passes the obtained OAuth token to the backend
	- The backend sends OAuth token to the service provider to validate the  received OAuth token. 
	- The service provide responds to backend with username/email information
	- The username/email obtained is used to create an account.
	- The backend creates a signed token for the created account and return it in response to the client. 
	- The client saves the token locally (in this case AsyncStorage) and sends it back in every subsequent request that needs authentication.
	- All requests needing authentication pass though a middleware that checks the provided token and allows the request only if the token is valid