import axios from 'axios';

const API_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
    return function (dispatch) {
        axios.post(`${API_URL}/signin`, {email, password});
    }
}
