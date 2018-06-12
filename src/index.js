import "babel-polyfill";

import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import App from './app';
import rootReducer from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
)
const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App history={history}/>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}

render();

if(module.hot) {
    module.hot.accept('./app', () => {
        render();
    })
}
module.hot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer))
})