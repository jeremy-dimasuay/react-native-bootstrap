import React from 'react';
import { Navigation } from 'utils/prop-types';
import { Header, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { View } from 'react-native';

const propTypes = {
    navigation: Navigation.isRequired,
};
const defaultProps = {};

export const Home = props => (
    <View>
        <Header
            leftComponent={{
                icon: 'menu',
                onPress: () => props.navigation.navigate('DrawerOpen')
            }}
            centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
        />
        <View><Text>This is the Home for the app!</Text></View>
    </View>
);

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state) {
    return {};
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connect(mapStateToProps)(Home);
