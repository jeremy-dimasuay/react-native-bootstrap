import { NavigationActions } from 'react-navigation';

function action(type, payload = {}) {
    return { type, ...payload };
}

// eslint-disable-next-line import/prefer-default-export
export const login = (navigation) => {
    navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Home' })
        ]
    }));

    return action('LOGIN');
};
