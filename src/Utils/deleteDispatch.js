import { deleteHyperLinkById } from '../actions/deleteByIdAction';
import fetchHyperLinks from '../selectors/HyperLinksSelector';

export default function deleteDispatch(id) {
  deleteHyperLinkById(id);
  fetchHyperLinks();
}
