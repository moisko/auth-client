import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_ERROR, AUTH_USER, UNAUTH_USER} from "./types";

const API_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
    return function (dispatch) {
        axios.post(`${API_URL}/signin`, {email, password})
            .then(response => {
                browserHistory.push('/feature');

                localStorage.setItem('token', response.data.token);

                dispatch({type: AUTH_USER});
            })
            .catch(() => {
                dispatch(authError('Bad Login info'));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');

    return {type: UNAUTH_USER}
}
