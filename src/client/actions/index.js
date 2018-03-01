import axios from 'axios';

// const API_URL = 'https://stark-beach-56716.herokuapp.com';
const API_URL = 'https://react-ssr-api.herokuapp.com';

export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async dispatch => {
    const res = await axios.get(`${API_URL}/users`);

    console.log(res);

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};
