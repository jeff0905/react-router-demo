import '@babel/polyfill';
import React from 'react';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import goodModel from './model/goods';
import { reducer as formReducer } from 'redux-form'

import { connectRouter, routerMiddleware } from 'connected-react-router';
import { render } from 'react-dom';
import {createBrowserHistory} from 'history';
import App from './app';
const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const reducer = combineReducers({
  form: formReducer,
  good: goodModel.goodReducer,
})
const store = createStore(
    connectRouter(history)(reducer),
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware)
)
sagaMiddleware.run(goodModel.goods);


render(
    <Provider store={store}>
      <App history={history}/>
    </Provider>,
    document.getElementById('app')
  )