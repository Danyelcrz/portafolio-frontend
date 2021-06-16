import { getData } from '../utils/httpUtil.js';
const url = 'https://danyelcrz-webserver.herokuapp.com/api/puestos';

export const getPuestos = () => {
    return getData(`${url}?limite=10`);
}