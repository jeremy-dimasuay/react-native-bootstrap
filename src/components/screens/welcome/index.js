import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Card, Header, Text } from 'react-native-elements';
import { View } from 'react-native';

import { Navigation } from 'utils/prop-types';

const propTypes = {
    greeting: PropTypes.string.isRequired,
    navigation: Navigation.isRequired
};

export class Welcome extends React.PureComponent {
    render() {
        const { greeting, navigation } = this.props;

        return (
            <View>
                <Header
                    centerComponent={{ text: 'WELCOME', style: { color: '#fff' } }}
                />
                <Card title={greeting}>
                    <View><Text>This is the first screen of your app.</Text></View>
                </Card>
                <Button
                    raised
                    onPress={() => navigation.navigate('Login')}
                    title="GO TO LOGIN"
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        greeting: state.app.greeting
    };
}

Welcome.propTypes = propTypes;

export default connect(mapStateToProps)(Welcome);
