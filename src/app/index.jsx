import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import reducers from './reducers';

import {browserHistory, Route, Router} from 'react-router';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <Route path='signin' component={Signin}/>
                <Route path='signout' component={Signout}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
