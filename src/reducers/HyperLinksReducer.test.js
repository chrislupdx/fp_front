import reducer from './HyperLinksReducer';
import {
  FETCH_HYPERLINKS
} from '../actions/fetchHyperLinksAction';

describe('hyperlinks reducer tests', () => {
  it('handles the fetch links reducer', () => {
    const initialState = {
      loading: false,
      hyperlinkList: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_HYPERLINKS,
      payload: ['one', 'two', 'a long-kept promise']
    });

    expect(newState).toEqual({
      loading: false,
      hyperlinkList: ['one', 'two', 'a long-kept promise'],
      error: null
    });
  });
})
;
