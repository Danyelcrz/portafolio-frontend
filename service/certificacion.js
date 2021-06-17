import { getData } from '../utils/httpUtil.js';
const url = 'https://danyelcrz-webserver.herokuapp.com/api/certificaciones';

export const getCertificaciones = () => {
    return getData(`${url}?limite=10`);
}