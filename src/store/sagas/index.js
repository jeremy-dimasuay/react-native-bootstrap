function action(type, payload = {}) {
    return { type, ...payload };
}

// eslint-disable-next-line import/prefer-default-export
export const login = (navigation, successRoute) => {
    navigation.navigate(successRoute);

    return action('LOGIN');
};

export const logout = (navigation, route) => {
    navigation.navigate(route);

    return action('LOGOUT');
};
