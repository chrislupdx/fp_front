import { createAction } from 'promise-middleware-redux';
import { getHyperLinks } from '../services/LinksApi';

export const [
  fetchHyperLinks,
  FETCH_HYPERLINKS,
  FETCH_HYPERLINKS_PENDING,
  _,
  FETCH_HYPERLINKS_ERROR
] = createAction('FETCH_HYPERLINKS', getHyperLinks);

