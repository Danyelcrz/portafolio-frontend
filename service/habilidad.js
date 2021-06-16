import { getData } from '../utils/httpUtil.js';
const url = 'https://danyelcrz-webserver.herokuapp.com/api/habilidades';

export const getHabilidades = () => {
    return getData(`${url}?limite=10`);
}