import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

const API_URL = 'https://react-ssr-api.herokuapp.com';

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: API_URL,
        headers: {cookie: req.get('cookie') || ''}
    });

    return createStore(
        reducers,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );
}
