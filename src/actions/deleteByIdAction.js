import { createAction } from 'promise-middleware-redux';
import { deleteLinkById } from '../services/LinksApi';

export const [
  deleteHyperLinkById,
  DELETE_HYPERLINK_BY_ID,
  DELETE_HYPERLINK_BY_ID_PENDING,
  _,
  DELETE_HYPERLINK_BY_ID_ERROR
] = createAction('DELETE_HYPERLINK_BY_ID', deleteLinkById);
