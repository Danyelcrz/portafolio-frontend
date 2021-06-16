import { getData } from '../utils/httpUtil.js';
const url = 'https://danyelcrz-webserver.herokuapp.com/api/usuarios';

export const getUsers = () => {
    return getData(`${url}?limite=10`);
}