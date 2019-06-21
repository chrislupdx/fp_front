import { post, get } from './request';

export const getHyperLinks = () => get('api/v1/hyperlinks');
export const createHyperLink = link => post('api/v1/hyperlinks', link);
export const getLinkById = id => get(`api/v1/hyperlinks/${id}`);
