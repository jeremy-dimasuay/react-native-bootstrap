import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';

export default createStore(reducer, applyMiddleware(createSagaMiddleware()));
