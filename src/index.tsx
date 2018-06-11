import * as React from 'react'
import * as ReactDOM from 'react-dom'

import 'babel-polyfill';
import './site.scss';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import reduxImmutableState from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import App from "./components/app";
import reducers from "./store/reducers";

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    reducers,
    applyMiddleware(thunk, middleware, reduxImmutableState())
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("react-root")
);
