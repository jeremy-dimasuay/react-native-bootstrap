import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import HomeScreen from 'components/screens/home';
import LoginScreen from 'components/screens/login';
import WelcomeScreen from 'components/screens/welcome';
import { Reducer } from 'utils/prop-types';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: Reducer.isRequired,
};

export const AppNavigator = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                title: 'Home',
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
        Welcome: {
            screen: WelcomeScreen,
            navigationOptions: () => ({
                title: 'Welcome',
                header: null
            }),
        },
    },
    {}
);

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator
        navigation={addNavigationHelpers({
            dispatch,
            state: nav,
            addListener: createReduxBoundAddListener('root')
        })}
    />
);

AppWithNavigationState.propTypes = propTypes;

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
