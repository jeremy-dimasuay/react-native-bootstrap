import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

import AppWithNavigationState from 'navigators/app';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
