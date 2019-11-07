import React, { Component } from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Root, configureStore} from './src/app/AppNavigator';
StatusBar.setBarStyle('light-content', true);

class App extends React.Component {
    render() {
        return (
            <Provider store={configureStore({})}>
                <Root />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('App', () => App);

export default App;