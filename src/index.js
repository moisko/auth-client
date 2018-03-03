import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import {matchRoutes} from 'react-router-config';
import Routes from './client/Routes';
import React from 'react';
import renderToHtml from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com'));

app.use(express.static('public'));

app.get('*', (req, resp) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(() => {
        resp.send(renderToHtml(req, store));
    });

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on port 3000');
});
