import {
  FETCH_HYPERLINK_BY_ID,
  FETCH_HYPERLINK_BY_ID_PENDING
} from '../actions/fetchbyIdAction';

const initialState = {
  hyperlink: {},
  loading: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_HYPERLINK_BY_ID:
      return { ...state, hyperlink: action.payload, loading: false };
    case FETCH_HYPERLINK_BY_ID_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
