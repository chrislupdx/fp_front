import {
  FETCH_HYPERLINKS,
  FETCH_HYPERLINKS_PENDING,
  FETCH_HYPERLINKS_ERROR,
} from '../actions/fetchHyperLinksAction';

import {
  POST_HYPERLINK,
  POST_HYPERLINK_PENDING,
  POST_HYPERLINK_ERROR
} from '../actions/postHyperLinksAction';

const initialState = {
  loading: false,
  hyperlinkList: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case POST_HYPERLINK_PENDING:
      return { ...state, loading: true };
    case POST_HYPERLINK:
      return { ...state, loading: false, hyperlinkList: [...state.hyperlinkList, action.payload] };
    case POST_HYPERLINK_ERROR:
      return { ...state, loading:false, error: action.payload };
    case FETCH_HYPERLINKS_PENDING:
      return { ...state, loading: true };
    case FETCH_HYPERLINKS:
      return { ...state, error: null, loading: false, hyperlinkList: action.payload };
    case FETCH_HYPERLINKS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
