import { createAction } from 'promise-middleware-redux';
import { getLinkById } from '../services/LinksApi';

export const [
  fetchHyperLinkById,
  FETCH_HYPERLINKBYID,
  FETCH_HYPERLINKBYID_PENDING,
  _,
  FETCH_HYPERLINKBYID_ERROR
] = createAction('FETCH_HYPERLINKBYID', getLinkById);
