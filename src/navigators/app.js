import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from 'components/screens/home';
import LoginScreen from 'components/screens/login';
import WelcomeScreen from 'components/screens/welcome';

const propTypes = {
};

export const AppNavigator = createStackNavigator(
    {
        Welcome: {
            screen: WelcomeScreen,
            navigationOptions: () => ({
                title: 'Welcome',
                header: null
            }),
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: () => ({
                title: 'Login',
                header: null
            })
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                title: 'Home',
                header: null
            }),
        },
    },
    {
        initialRouteName: 'Welcome',
    }
);

const AppWithNavigationState = () => (
    <AppNavigator />
);

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state) {
    return {};
}

AppWithNavigationState.propTypes = propTypes;

export default connect(mapStateToProps)(AppWithNavigationState);
