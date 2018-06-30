import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigation } from 'utils/prop-types';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Text, View } from 'react-native';
import Icon from 'components/icon';
import { logout } from 'store/sagas';
import HomeScreen from './home';
import SettingsScreen from './settings';


const propTypes = {
    navigation: Navigation.isRequired,
    logout: PropTypes.func.isRequired
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

        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.logout(this.props.navigation, 'Welcome');
    }

    render() {
        return (
            <Drawer
                screenProps={{
                    logout: this.logout
                }}
            />
        );
    }
}

RootHome.propTypes = propTypes;
RootHome.defaultProps = defaultProps;

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state) {
    return {};
}

RootHome.propTypes = propTypes;
RootHome.defaultProps = defaultProps;

export default connect(mapStateToProps, {
    logout
})(RootHome);
