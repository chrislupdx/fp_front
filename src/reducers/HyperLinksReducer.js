import {
  FETCH_HYPERLINKS,
  FETCH_HYPERLINKS_PENDING,
  FETCH_HYPERLINKS_ERROR
} from '../actions/fetchHyperLinksaction';

const initialState = {
  loading: false,
  hyperlinkList: [],
  error: null
};
  
export default function reducer(state = initialState, action) {
  switch(action.type) {
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
