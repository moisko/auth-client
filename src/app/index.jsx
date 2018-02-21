import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import App from './components/app';
import Signin from './components/auth/signin';
import reducers from './reducers';

import {browserHistory, Route, Router} from 'react-router';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <Route path='signin' component={Signin}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
