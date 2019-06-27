import { createAction } from 'promise-middleware-redux';
import { patchLinkById } from '../services/LinksApi';

export const [
  editLinkById,
  PATCH_HYPERLINK,
  PATCH_HYPERLINK_PENDING,
  _,
  PATCH_HYPERLINK_ERROR
] = createAction('PATCH_HYPERLINK', patchLinkById);
