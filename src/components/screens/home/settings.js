import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'utils/prop-types';
import { Button, Header, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { View } from 'react-native';

const propTypes = {
    navigation: Navigation.isRequired,
    screenProps: PropTypes.shape({
        onLogout: PropTypes.func.isRequired
    }).isRequired
};
const defaultProps = {};

export const Settings = props => (
    <View>
        <Header
            leftComponent={{
                icon: 'menu',
                onPress: () => props.navigation.navigate('DrawerOpen')
            }}
            centerComponent={{ text: 'SETTINGS', style: { color: '#fff' } }}
        />
        <View><Text>This is the Settings for the app!</Text></View>
        <Button
            raised
            onPress={() => props.screenProps.onLogout()}
            title="LOGOUT"
        />
    </View>
);

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state) {
    return {};
}

Settings.propTypes = propTypes;
Settings.defaultProps = defaultProps;

export default connect(mapStateToProps)(Settings);
