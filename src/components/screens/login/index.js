import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'utils/prop-types';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Button, Header, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { View } from 'react-native';
import { login } from 'store/sagas';

const propTypes = {
    login: PropTypes.func.isRequired,
    navigation: Navigation.isRequired,
};
const defaultProps = {};

export class Login extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            username: { isError: false, value: '' },
            password: { isError: false, value: '' },
        };
    }

    render() {
        const { navigation } = this.props;
        const { username, password } = this.state;

        return (
            <View>
                <Header
                    leftComponent={{
                        icon: 'arrow-back',
                        onPress: () => navigation.dispatch(NavigationActions.back())
                    }}
                    centerComponent={{ text: 'LOGIN', style: { color: '#fff' } }}
                />
                <FormLabel>Username</FormLabel>
                <FormInput
                    onChangeText={() => {
                    }}
                />
                {username.isError && (
                    <FormValidationMessage>Error with username</FormValidationMessage>
                )}
                <FormLabel>Password</FormLabel>
                <FormInput
                    onChangeText={() => {
                    }}
                />
                {password.isError && (
                    <FormValidationMessage>Error message</FormValidationMessage>
                )}
                <Button
                    raised
                    onPress={() => { this.props.login(navigation, 'Home'); }}
                    title="SUBMIT"
                />
            </View>
        );
    }
}

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state) {
    return {};
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default connect(mapStateToProps, {
    login
})(Login);
