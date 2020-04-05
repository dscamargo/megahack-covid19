import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const { tron } = console;

const sagaMonitor =
  process.env.NODE_ENV === 'development' ? tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(...middlewares), tron.createEnhancer())
    : compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
