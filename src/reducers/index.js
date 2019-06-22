import { combineReducers } from 'redux';
import hyperlinks from './HyperLinksReducer';
import hyperlinkbyid from './LinksByIdReducer';

export default combineReducers({
  hyperlinks,
  hyperlinkbyid
});
