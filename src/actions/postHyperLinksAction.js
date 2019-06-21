import { createAction } from 'promise-middleware-redux';
import { createHyperLink } from '../services/LinksApi';

export const [
  postHyperLink,
  POST_HYPERLINK,
  POST_HYPERLINK_PENDING,
  _,
  POST_HYPERLINK_ERROR
] = createAction('POST_HYPERLINK', createHyperLink);
