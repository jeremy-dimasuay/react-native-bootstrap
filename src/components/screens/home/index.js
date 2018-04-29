import React, { PureComponent } from 'react';
import { Navigation } from 'utils/prop-types';
import { DrawerNavigator, DrawerItems, NavigationActions } from 'react-navigation';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './home';
import SettingsScreen from './settings';

const propTypes = {
    navigation: Navigation.isRequired
};
const defaultProps = {};

const DrawerContent = props => (
    <View>
        <View
            style={{
                backgroundColor: '#f50057',
                height: 140,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text style={{ color: 'white', fontSize: 30 }}>
                Header
            </Text>
        </View>
        <DrawerItems {...props} />
    </View>
);

const Drawer = DrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: <Icon name="home" color="black" />
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                drawerLabel: 'Settings',
                drawerIcon: <Icon name="cog" color="black" />
            }
        },
    },
    {
        initialRouteName: 'Home',
        contentComponent: DrawerContent,

        // Workaround - https://stackoverflow.com/questions/47886782/undefined-is-not-an-object-evaluating-route-routename
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    }
);

// eslint-disable-next-line react/prefer-stateless-function
class RootHome extends PureComponent {
    constructor() {
        super();

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Welcome' })
            ]
        }));
    }

    render() {
        return (
            <Drawer
                screenProps={{
                    onLogout: this.onLogout
                }}
            />
        );
    }
}

RootHome.propTypes = propTypes;
RootHome.defaultProps = defaultProps;
export default RootHome;
