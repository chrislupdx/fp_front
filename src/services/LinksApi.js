import { post, get, del } from './request';

export const getHyperLinks = () => get('api/v1/hyperlinks');
export const createHyperLink = link => post('api/v1/hyperlinks', link);
export const getLinkById = id => get(`api/v1/hyperlinks/${id}`);
export const deleteLinkById = id => del(`api/v1/hyperlinks/${id}`);
