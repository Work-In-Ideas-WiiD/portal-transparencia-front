import axios from 'axios';

export const apiRenapsi = axios.create({
    baseURL: 'https://renapsi.org.br/portal-transparencia/api/',

});