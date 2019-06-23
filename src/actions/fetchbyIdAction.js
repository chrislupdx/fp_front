import { createAction } from 'promise-middleware-redux';
import { getLinkById } from '../services/LinksApi';

export const [
  fetchHyperLinkById,
  FETCH_HYPERLINK_BY_ID,
  FETCH_HYPERLINK_BY_ID_PENDING,
  _,
  FETCH_HYPERLINKBYID_ERROR
] = createAction('FETCH_HYPERLINKBYID', getLinkById);
