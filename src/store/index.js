import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import reducer from './reducers';

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);

export default createStore(reducer, applyMiddleware(middleware, createSagaMiddleware()));
